// TODO: move this to domain
export type Category = {
  name: string;
  description: string;
  icon:
    | "deliver"
    | "release"
    | "fun"
    | "health"
    | "learning"
    | "mission"
    | "pawn"
    | "speed"
    | "process"
    | "support"
    | "teamwork";
};
