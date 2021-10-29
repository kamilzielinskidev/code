import {
  always,
  applySpec,
  F,
  ifElse,
  lensPath,
  map,
  over,
  pipe,
  prop,
  unless,
  view,
} from "ramda";
import { isNotNilOrEmpty, then } from "ramda-adjunct";
import { ChangeEvent } from "react";

import { Result, WikipediaApiResponse, WikipediaPage } from "./models";

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

export const callWithInputValue = (fn: (v: string) => void) =>
  pipe(getInputValue, fn);

export const searchHeaderTextFromState = pipe(prop("search"), searchHeaderText);

export const createWikipediaApiUrl = (query: string) =>
  `https://en.m.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageprops%7Cpageprops%7Cpageimages%7Cdescription&generator=prefixsearch&ppprop=displaytitle&gpssearch=${query}&gpsnamespace=0&gpslimit=5`;

export const createWikipediaArticleUrl = (pageId: string) =>
  `https://en.wikipedia.org/?curid=${pageId}`;

const pagesLens = lensPath<WikipediaApiResponse, WikipediaPage[]>([
  "query",
  "pages",
]);

const pageIdLens = lensPath<WikipediaPage, number>(["pageid"]);

const titleLens = lensPath<WikipediaApiResponse, string>(["title"]);

const descriptionLens = lensPath<WikipediaPage, string>(["description"]);

export const emptyStringForEmpty = unless(isNotNilOrEmpty, always(""));

export const mapResponseToResult = pipe(
  view(pagesLens),
  map(over(descriptionLens, emptyStringForEmpty)),
  map(
    applySpec<Result>({
      pageId: view(pageIdLens),
      title: view(titleLens),
      description: view(descriptionLens),
    })
  )
);

const fetchWikipediaQuery = pipe(createWikipediaApiUrl, fetch);

// TODO: test it with mocked fetch
export const getWikipediaQuery = pipe(
  fetchWikipediaQuery,
  then(mapResponseToResult)
);
