import { Int32, ObjectId } from 'mongodb';

export interface RoomsSchema {
  _id: ObjectId;
  name: string;
  survey_isOpen: boolean;
  survey_iteration: null | Int32;
}

export interface SurveysSchema {
  _id: ObjectId;
  roomId: string;
  iteration: Int32;
  isOpen: boolean;
  responses_answers: { FUN: Int32; HEALTH_OF_CODEBASE: Int32 }[];
}

export interface ResponsesSchema {
  _id: ObjectId;
  username: string;
  surveyId: string;
  answers: {
    FUN: Int32;
    HEALTH_OF_CODEBASE: Int32;
  };
}
