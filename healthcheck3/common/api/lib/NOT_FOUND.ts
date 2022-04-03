import { NextApiResponse } from 'next';

export const NOT_FOUND = (res: NextApiResponse, msg: string) =>
  res.status(404).json({ msg });
