import type { NextApiRequest, NextApiResponse } from "next";

import { BAD_REQUEST } from '../../../common/api/lib/BAD_REQUEST';
import { INTERNAL_ERROR } from '../../../common/api/lib/INTERNAL_ERROR';
import * as Rooms from '../../../modules/db/roomsService';

const post = (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body.name) return BAD_REQUEST(res);

  const name: string = req.body.name;

  return Rooms.createRoom(name)
    .then((roomId) => Rooms.getById(roomId))
    .then((room) => res.status(200).json(room))
    .catch((err) => INTERNAL_ERROR(res, err.message));
};

const roomsHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") return post(req, res);

  return BAD_REQUEST(res);
};

export default roomsHandler;
