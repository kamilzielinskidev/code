export type Callback<A, B> = (a: A) => B;

export const andThen =
  <A, B>(a: Callback<A, B>) =>
  (b: Promise<A>) =>
    b.then(a);

// TODO: add andCatch
