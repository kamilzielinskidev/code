import { O, pipe } from "@mobily/ts-belt";

export const callIfNotNull =
  <A>(callback: (a: A) => void) =>
  (value: A) => {
    pipe(O.fromNullable(value), O.tap(callback));
  };
