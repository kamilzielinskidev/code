import { F, ifElse, lensPath, pipe, view } from "ramda";
import { isNotNilOrEmpty } from "ramda-adjunct";
import { ChangeEvent } from "react";

type InputChangeEvent = ChangeEvent<HTMLInputElement>;

const inputEventValueLens = lensPath<InputChangeEvent, string>([
  "target",
  "value",
]);

export const getInputValue = view(inputEventValueLens);

export const prependWith = (val: string) => (text: string) => `${val}${text}`;

export const searchHeaderText = ifElse(
  isNotNilOrEmpty,
  prependWith("Search query: "),
  F
);
