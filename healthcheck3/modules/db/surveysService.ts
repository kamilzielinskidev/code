import { andThen } from 'ramda';

import { pipe } from '@mobily/ts-belt';

import { connectCollection, findAll } from './lib/db';
import { SurveysSchema } from './lib/schemas';

export const connect = () => connectCollection<SurveysSchema>("surveys");

export const getByRoomIdOrdered = (id: string) =>
  pipe(connect(), andThen(findAll({ roomId: id }, { sort: ["iteration", "descending"] })));
