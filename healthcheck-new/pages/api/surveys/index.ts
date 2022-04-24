import type { NextApiRequest, NextApiResponse } from "next";

import { BAD_REQUEST } from '../../../common/api/lib/BAD_REQUEST';
import { FORBIDDEN } from '../../../common/api/lib/FORBIDDEN';
import { INTERNAL_ERROR } from '../../../common/api/lib/INTERNAL_ERROR';
import { NOT_FOUND } from '../../../common/api/lib/NOT_FOUND';
import * as Rooms from '../../../modules/db/roomsService';
import * as Surveys from '../../../modules/db/surveysService';

const get = (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.roomid || typeof req.query.roomid !== "string") {
    return BAD_REQUEST(res);
  }

  // TODO: put sorting it in parameter
  return Surveys.getByRoomIdOrdered(req.query.roomid)
    .then((surveys) => {
      res.status(200).json(surveys);
    })
    .catch((err) => {
      return INTERNAL_ERROR(res, err.message);
    });
};

const post = (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.roomid || typeof req.query.roomid !== "string") return BAD_REQUEST(res);

  const roomId: string = req.query.roomid;

  Rooms.getById(roomId)
    .then((room) => {
      if (!room) return NOT_FOUND(res, "NO_ROOM");
      if (room.survey_isOpen) return FORBIDDEN(res, "FORBIDDEN");

      const newSurvey =
        // TODO: handle this assumption that there will be always iteration if there's a survey
        room.surveyId === null ? { iteration: 0, roomId } : { iteration: room.survey_iteration! + 1, roomId };

      // TODO: Decouple survey from room totally, GET surveys?index=last
      Surveys.createSurvey(newSurvey)
        .then((surveyId) => {
          const editedRoom =
            room.surveyId === null
              ? { survey_isOpen: true, survey_iteration: 0, surveyId }
              : { survey_isOpen: true, survey_iteration: room.survey_iteration! + 1, surveyId };
          return Rooms.updateById(roomId, editedRoom).then(() => surveyId);
        })
        .then((surveyId) => Surveys.getById(surveyId))
        .then((survey) => res.status(200).json(survey));
    })

    .catch((err) => {
      return INTERNAL_ERROR(res, err.message);
    });
};

const surveysHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") return get(req, res);
  if (req.method === "POST") return post(req, res);

  return BAD_REQUEST(res);
};

export default surveysHandler;
