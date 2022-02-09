import { A } from "@mobily/ts-belt";

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

export const callbackIfElNotInPath =
  (e: MouseEvent) => (el: HTMLElement) => (callback: Callback<void, void>) =>
    !e.composedPath().some((pathEl) => pathEl === el) && callback();

export const callbackIfKeydownEnter =
  (e: KeyboardEvent) => (callback: Callback<void, void>) =>
    e.key === "Escape" && callback();

export const getUniquesItemsByProp =
  <T>(a: ReadonlyArray<T>) =>
  (prop: keyof T) =>
    A.reduce(a, <ReadonlyArray<T>>[], (acc, next) =>
      acc.some((a) => a[prop] === next[prop]) ? acc : [...acc, next]
    );

export const getUniqueFromArraysByProp =
  <T>(arr1: ReadonlyArray<T>) =>
  (arr2: ReadonlyArray<T>) =>
  (prop: keyof T) =>
    A.filter(
      arr1,
      (arr1Item) => !arr2.some((arr2Item) => arr1Item[prop] === arr2Item[prop])
    );
