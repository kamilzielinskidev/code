export interface Room {
  id: string;
  name: string;
  surveyIteration: Survey["iteration"];
  surveyIsOpen: Survey["isOpen"];
}

interface Response {
  id: string;
  username: string;
  survey: Survey["id"];
  answers: {
    FUN: 0 | 1 | 2;
    HEALTH_OF_CODEBASE: 0 | 1 | 2;
  };
}

export interface Survey {
  id: string;
  roomId: Room["id"];
  iteration: number;
  isOpen: boolean;
  responsesIds: Response["id"][];
}
