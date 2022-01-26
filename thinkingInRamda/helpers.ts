import { thunkify } from "./utils";

export const log = thunkify(console.log);
export const time = thunkify(console.time);
export const timeLog = thunkify(console.timeLog);
export const timeEnd = thunkify(console.timeEnd);
