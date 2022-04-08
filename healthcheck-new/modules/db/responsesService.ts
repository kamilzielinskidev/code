import { andThen } from 'ramda';

import { pipe } from '@mobily/ts-belt';

import { connectCollection, findOne, findOneById, insertOne } from './lib/db';
import { ResponsesSchema } from './lib/schemas';

export const connect = () => connectCollection<ResponsesSchema>("responses");

export const getById = (id: string) => pipe(connect(), andThen(findOneById(id)));

export const getOne = (query: Partial<ResponsesSchema>) => pipe(connect(), andThen(findOne(query)));

export const createResponse = (response: ResponsesSchema) => pipe(connect(), andThen(insertOne(response)));
