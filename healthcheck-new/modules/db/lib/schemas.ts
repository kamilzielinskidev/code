export interface RoomsSchema {
  name: string;
  // TODO: decouple room from survey totally
  surveyId: null | string;
  survey_isOpen: boolean;
  survey_iteration: null | number;
}

export interface SurveysSchema {
  roomId: string;
  iteration: number;
  isOpen: boolean;
  responses_answers: {
    FUN: number;
    HEALTH_OF_CODEBASE: number;
    DELIVERING_VALUE: number;
    EASY_TO_RELEASE: number;
    LEARNING: number;
    MISSION: number;
    PAWN_OR_PLAYERS: number;
    SPEED: number;
    SUITABLE_PROCESS: number;
    SUPPORT: number;
    TEAMWORK: number;
  }[];
}

export interface ResponsesSchema {
  username: string;
  surveyId: string;
  answers: {
    FUN: number;
    HEALTH_OF_CODEBASE: number;
  };
}
