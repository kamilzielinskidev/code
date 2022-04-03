import { andThen } from 'ramda';

import { pipe } from '@mobily/ts-belt';

import { Room } from './domain';
import { connectCollection, findOneById, updateOne } from './lib/db';

export const connect = () => connectCollection<Room>("rooms");

export const getById = (id: Room["id"]) =>
  pipe(connect(), andThen(findOneById(id)));

// export const updateByName = (value: Partial<Room>) => (name: Room["name"]) =>
//   pipe(connect(), andThen(updateOne(value, { name })));
