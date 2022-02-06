export type Callback<A, B> = (a: A) => B;

// TODO: test
export const andThen =
  <A, B>(a: Callback<A, B>) =>
  (b: Promise<A>) =>
    b.then(a);

export const map =
  <A, B>(a: Callback<A, B>) =>
  (b: A[]) =>
    b.map(a);
