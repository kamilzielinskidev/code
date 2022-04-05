import { NextApiResponse } from 'next';

export const FORBIDDEN = (res: NextApiResponse, msg: string) => res.status(403).json({ msg });
