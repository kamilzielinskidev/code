import type { NextApiRequest, NextApiResponse } from "next";

import { BAD_REQUEST } from '../../../common/api/lib/BAD_REQUEST';
import { INTERNAL_ERROR } from '../../../common/api/lib/INTERNAL_ERROR';
import { NOT_FOUND } from '../../../common/api/lib/NOT_FOUND';
import { getById } from '../../../modules/db/roomsService';

const roomsIdHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return BAD_REQUEST(res);
  }

  if (typeof req.query.id !== "string") {
    return BAD_REQUEST(res);
  }

  const id = req.query.id;

  getById(id)
    .then((room) => {
      if (!room) return NOT_FOUND(res, "NO_ROOM");

      return res.status(200).json(room);
    })
    .catch((err) => {
      return INTERNAL_ERROR(res, err.message);
    });
};

export default roomsIdHandler;
