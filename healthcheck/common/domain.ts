export interface User {
  name: string;
}

export interface Answers {
  FUN: 0 | 1 | 2;
  HEALTH_OF_CODEBASE: 0 | 1 | 2;
}

export interface Room {
  id: string;
  name: string;
  currentSurvey: null | Survey;
}

interface Response {
  id: string;
  username: string;
  survey: Survey;
  answers: Answers;
}

export interface Survey {
  id: string;
  roomId: Room;
  iteration: number;
  isOpen: boolean;
  responses: Answers;
}
