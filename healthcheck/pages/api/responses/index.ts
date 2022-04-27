import type { NextApiRequest, NextApiResponse } from "next";

import { BAD_REQUEST } from '../../../common/api/lib/BAD_REQUEST';
import { FORBIDDEN } from '../../../common/api/lib/FORBIDDEN';
import { INTERNAL_ERROR } from '../../../common/api/lib/INTERNAL_ERROR';
import { NOT_FOUND } from '../../../common/api/lib/NOT_FOUND';
import * as Responses from '../../../modules/db/responsesService';
import * as Surveys from '../../../modules/db/surveysService';

interface Answers {
  FUN: number;
  HEALTH_OF_CODEBASE: number;
}

const post = (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body.surveyId || !req.body.username || !req.body.answers) return BAD_REQUEST(res);

  const surveyId: string = req.body.surveyId;
  const username: string = req.body.username;
  const answers: Answers = req.body.answers;

  return Responses.getOne({ username, surveyId })
    .then((response) => {
      if (response) return FORBIDDEN(res, "FORBIDDEN");
      return Surveys.getById(surveyId).then((survey) => {
        if (!survey) return NOT_FOUND(res, "NOT_FOUND");
        if (!survey.isOpen) return FORBIDDEN(res, "FORBIDDEN");

        return Promise.all([
          Responses.createResponse({ answers, surveyId, username }),
          Surveys.updateById(surveyId, { responses_answers: [...survey.responses_answers, answers] }),
        ])
          .then(([responseId]) => Responses.getById(responseId))
          .then((response) => res.status(200).json(response));
      });
    })
    .catch((err) => INTERNAL_ERROR(res, err.message));
};

const responsesHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") return post(req, res);

  return BAD_REQUEST(res);
};

export default responsesHandler;
