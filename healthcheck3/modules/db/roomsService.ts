import { andThen } from 'ramda';

import { pipe } from '@mobily/ts-belt';

import { connectCollection, findOneById } from './lib/db';
import { RoomsSchema } from './lib/schemas';

export const connect = () => connectCollection<RoomsSchema>("rooms");

export const getById = (id: string) => pipe(connect(), andThen(findOneById(id)));

// export const updateByName = (value: Partial<Room>) => (name: Room["name"]) =>
//   pipe(connect(), andThen(updateOne(value, { name })));
