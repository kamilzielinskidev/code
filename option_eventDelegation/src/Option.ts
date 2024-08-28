import { pipe } from "fp-ts/lib/function";
import { BrowserNode } from "./lib/browserAPI";
import { getParent } from "./utils/getParent";

type Lambda<A, B> = (a: A) => B;
type None = { _tag: "None" };
type Some<A> = { _tag: "Some"; value: A };
type Option<A> = None | Some<A>;

export const none: Option<never> = { _tag: "None" };
export const some = <A>(value: A): Option<A> => ({ _tag: "Some", value });

export const of = <A>(value: A | null | undefined): Option<A> =>
  value === null || value === undefined ? none : some(value);

export const isSome = <A>(option: Option<A>): option is Some<A> =>
  option._tag === "Some";

export const getOrDie = <A>(option: Option<A>): A => {
  if (isSome(option)) {
    return option.value; // it says to return 5 in docs but I assumed it's a mistake
  }
  throw new Error("Option is None");
};

export const map =
  <A, B>(f: Lambda<A, B>) =>
  (option: Option<A>): Option<B> =>
    isSome(option) ? some(f(option.value)) : none;

export const bind =
  <A, B>(f: Lambda<A, Option<B>>) =>
  (option: Option<A>): Option<B> =>
    isSome(option) ? f(option.value) : none;

export const fold =
  <A, B>(onNone: Lambda<void, B>, onSome: Lambda<A, B>) =>
  (option: Option<A>): B =>
    isSome(option) ? onSome(option.value) : onNone();

// 1.
export const getGrandparentName = (node: BrowserNode) => {
  const parentOption = of(node.parentNode);
  const grapdparentOption = of(getOrDie(parentOption).parentNode);
  if (isSome(grapdparentOption)) {
    return grapdparentOption.value.nodeName;
  }
  throw new Error("Option is None");
};

// 2.
export const getGrandparentName2 = (node: BrowserNode) =>
  pipe(
    node,
    of,
    bind(getParent),
    bind(getParent),
    map((node) => node.nodeName)
  );

// 3.
export const getGreatGrandparent = (node: BrowserNode) =>
  pipe(node, of, bind(getParent), bind(getParent), bind(getParent));

// 4. Strength - safer code, less ifs
// Weakness - learning curve, non native to JS = non future proof

// 5.
export const getParentOrSelf = (node: BrowserNode) =>
  pipe(
    node,
    of,
    bind(getParent),
    fold(
      () => node,
      (parentNode) => parentNode
    )
  );
