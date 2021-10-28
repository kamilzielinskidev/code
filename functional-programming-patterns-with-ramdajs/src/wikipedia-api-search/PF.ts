import { F, ifElse, lensPath, view } from "ramda";
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

export const createWikipediaApiUrl = (query: string) =>
  `https://en.m.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageprops%7Cpageprops%7Cpageimages%7Cdescription&generator=prefixsearch&ppprop=displaytitle&gpssearch=${query}&gpsnamespace=0&gpslimit=5`;

export const createWikipediaArticleUrl = (pageId: string) =>
  `https://en.wikipedia.org/?curid=${pageId}`;
