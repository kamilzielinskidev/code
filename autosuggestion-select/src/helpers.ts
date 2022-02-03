type Callback<A, B> = (a: A) => B;

// TODO: test
export const andThen =
  <A, B>(a: Callback<A, B>) =>
  (b: Promise<A>) =>
    b.then(a);

export const tapAfterHalfSecond = (a: Callback<void, void>) =>
  setTimeout(a, 500);
