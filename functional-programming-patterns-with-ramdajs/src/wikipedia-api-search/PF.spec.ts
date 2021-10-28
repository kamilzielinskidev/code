import { ChangeEvent } from "react";

import {
  createWikipediaApiUrl,
  createWikipediaArticleUrl,
  getInputValue,
  prependWith,
  searchHeaderText,
} from "./PF";

describe("getInputValue receives value from change input event", () => {
  const changeEvent = {
    target: { value: "testValue" },
  } as ChangeEvent<HTMLInputElement>;
  it("should return testValue", () => {
    expect(getInputValue(changeEvent)).toBe("testValue");
  });
});

describe("prependWith is called with 1st argument 'zzz' and 2nd argument 'xxx ", () => {
  it("should return 'zzzxxx'", () => {
    expect(prependWith("zzz")("xxx")).toBe("zzzxxx");
  });
});

describe("searchHeaderText is called", () => {
  describe("with non empty string", () => {
    it("should return 'Search query: testValue'", () => {
      expect(searchHeaderText("testValue")).toBe("Search query: testValue");
    });
  });
  describe("with empty string", () => {
    it("should return false", () => {
      expect(searchHeaderText("")).toBe(false);
    });
  });
});

describe("createWikipediaApiUrl is called with pizza", () => {
  it("should return 'https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=pizza'", () => {
    expect(createWikipediaApiUrl("pizza")).toBe(
      "https://en.m.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageprops%7Cpageprops%7Cpageimages%7Cdescription&generator=prefixsearch&ppprop=displaytitle&gpssearch=pizza&gpsnamespace=0&gpslimit=5"
    );
  });
});

describe("createWikipediaArticleUrl is called with 123", () => {
  it("should return https://en.wikipedia.org/?curid=123", () => {
    expect(createWikipediaArticleUrl("123")).toBe(
      "https://en.wikipedia.org/?curid=123"
    );
  });
});
