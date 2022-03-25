type Voting = {
  index: number;
  isOpen: boolean;
};

export type Room = {
  voting: Voting;
};
