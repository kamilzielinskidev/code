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

  Surveys.getByRoomIdOrdered(req.query.roomid)
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
      if (room.survey_iteration !== null) return FORBIDDEN(res, "FORBIDDEN FOR NOW");

      // TODO: bulk/batch it
      return Promise.all([
        Surveys.createSurvey({ iteration: 0, roomId }),
        Rooms.updateById(roomId, { survey_isOpen: true, survey_iteration: 0 }),
      ])
        .then(([surveyId]) => Surveys.getById(surveyId))
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