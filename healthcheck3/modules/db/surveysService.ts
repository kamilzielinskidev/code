import { andThen } from 'ramda';

import { pipe } from '@mobily/ts-belt';

import { connectCollection, findAll, findOne, findOneById, insertOne } from './lib/db';
import { SurveysSchema } from './lib/schemas';

export const connect = () => connectCollection<SurveysSchema>("surveys");

export const getByRoomIdOrdered = (id: string) =>
  pipe(connect(), andThen(findAll({ roomId: id }, { sort: ["iteration", "descending"] })));

export const getById = (id: string) => pipe(connect(), andThen(findOneById(id)));

export const getOne = (survey: Partial<SurveysSchema>) => pipe(connect(), andThen(findOne(survey)));

export const createSurvey = (survey: Pick<SurveysSchema, "iteration" | "roomId">) =>
  pipe(connect(), andThen(insertOne({ ...survey, responses_answers: [], isOpen: true })));
