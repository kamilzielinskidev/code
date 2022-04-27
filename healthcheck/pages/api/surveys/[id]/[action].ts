import type { NextApiRequest, NextApiResponse } from "next";

import { BAD_REQUEST } from '../../../../common/api/lib/BAD_REQUEST';
import { FORBIDDEN } from '../../../../common/api/lib/FORBIDDEN';
import { INTERNAL_ERROR } from '../../../../common/api/lib/INTERNAL_ERROR';
import { NOT_FOUND } from '../../../../common/api/lib/NOT_FOUND';
import * as Rooms from '../../../../modules/db/roomsService';
import * as Surveys from '../../../../modules/db/surveysService';

const close = (req: NextApiRequest, res: NextApiResponse) => {
  const surveyId = req.query.id;

  if (typeof surveyId !== "string") return BAD_REQUEST(res);

  return Surveys.getById(surveyId)
    .then((survey) => {
      if (!survey) return NOT_FOUND(res, "NO_SURVEY");
      if (survey.isOpen === false) return FORBIDDEN(res, "FORBIDDEN");

      return Promise.all([
        Surveys.updateById(surveyId, { isOpen: false }),
        Rooms.updateById(survey.roomId, { survey_isOpen: false }),
      ])
        .then(() => Surveys.getById(surveyId))
        .then((survey) => res.status(200).json(survey));
    })
    .catch((err) => {
      return INTERNAL_ERROR(res, err.message);
    });
};

const surveysIdHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "PUT") return BAD_REQUEST(res);

  if (req.query.action === "close") return close(req, res);

  return BAD_REQUEST(res);
};

export default surveysIdHandler;
