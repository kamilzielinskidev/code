import { NextApiResponse } from 'next';

export const INTERNAL_ERROR = (res: NextApiResponse, msg: string) =>
  res.status(500).json({ msg });
