import type { NextApiRequest, NextApiResponse } from "next";

import { BAD_REQUEST } from '../../../common/api/lib/BAD_REQUEST';
import { INTERNAL_ERROR } from '../../../common/api/lib/INTERNAL_ERROR';
import { getByRoomIdOrdered } from '../../../modules/db/surveysService';

const surveysHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return BAD_REQUEST(res);
  }

  if (!req.query.roomid || typeof req.query.roomid !== "string") {
    return BAD_REQUEST(res);
  }

  getByRoomIdOrdered(req.query.roomid)
    .then((surveys) => {
      res.status(200).json(surveys);
    })
    .catch((err) => {
      return INTERNAL_ERROR(res, err.message);
    });
};

export default surveysHandler;
