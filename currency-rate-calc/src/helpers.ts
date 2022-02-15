export type Callback<A, B> = (a: A) => B;

export const andThen =
  <A, B>(a: Callback<A, B>) =>
  (b: Promise<A>) =>
    b.then(a);

// TODO: add andCatch
export const toString = (value: number) => `${value}`;

export const hasValue = <T>(value: T) => value !== undefined && value !== null;
