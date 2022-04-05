export interface RoomsSchema {
  name: string;
  survey_isOpen: boolean;
  survey_iteration: null | number;
}

export interface SurveysSchema {
  roomId: string;
  iteration: number;
  isOpen: boolean;
  responses_answers: { FUN: number; HEALTH_OF_CODEBASE: number }[];
}

export interface ResponsesSchema {
  username: string;
  surveyId: string;
  answers: {
    FUN: number;
    HEALTH_OF_CODEBASE: number;
  };
}
