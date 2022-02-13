export type Rate = {
  code: string;
  value: number;
  date: Date;
};

export const Rate = (rate: Rate) => ({
  value: rate,
  //   map: (fn: (a: Rate)=> Rate) => Rate(fn(rate)),
  //   chain: <A>(fn: (a: Rate)=> A) => fn(rate)
});
