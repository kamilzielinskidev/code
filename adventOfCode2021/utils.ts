export const split = (a: string) => (b: string) => b.split(a);

export const map =
  <A, B>(fn: (a: A) => B) =>
  (a: A[]) =>
    a.map(fn);

export const filter =
  <A>(fn: (a: A) => boolean) =>
  (a: A[]) =>
    a.filter(fn);

export const compareStrings = (string1: string) => (string2: string) =>
  string1.split("").sort().join() === string2.split("").sort().join();
