import { andThen } from 'ramda';

import { pipe } from '@mobily/ts-belt';

import { connectCollection, findOneById, updateOneById } from './lib/db';
import { RoomsSchema } from './lib/schemas';

export const connect = () => connectCollection<RoomsSchema>("rooms");

export const getById = (id: string) => pipe(connect(), andThen(findOneById(id)));

export const updateById = (id: string, value: Partial<RoomsSchema>) =>
  pipe(connect(), andThen(updateOneById(value, id)));
