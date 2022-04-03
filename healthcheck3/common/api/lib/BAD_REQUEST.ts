import { NextApiResponse } from 'next';

export const BAD_REQUEST = (res: NextApiResponse) =>
  res.status(400).json({ msg: "BAD_REQUEST" });
