import { andThen } from 'ramda';

import { pipe } from '@mobily/ts-belt';

import { connectCollection, findOneById, insertOne, updateOneById } from './lib/db';
import { RoomsSchema } from './lib/schemas';

export const connect = () => connectCollection<RoomsSchema>("rooms");

export const getById = (id: string) => pipe(connect(), andThen(findOneById(id)));

export const updateById = (id: string, value: Partial<RoomsSchema>) =>
  pipe(connect(), andThen(updateOneById(value, id)));

export const createRoom = (name: RoomsSchema["name"]) =>
  pipe(connect(), andThen(insertOne({ name, surveyId: null, survey_isOpen: false, survey_iteration: null })));
