import { ChangeEvent } from "react";

import { SearchState, WikipediaApiResponse } from "./models";
import {
  callWithInputValue,
  createWikipediaApiUrl,
  createWikipediaArticleUrl,
  emptyStringForEmpty,
  getInputValue,
  mapResponseToResult,
  prependWith,
  searchHeaderText,
  searchHeaderTextFromState,
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

describe("searchHeaderTextFromState is called with state", () => {
  const state: SearchState = { search: "test", setSearch: () => {} };
  it("should return 'Search query: test'", () => {
    expect(searchHeaderTextFromState(state)).toBe("Search query: test");
  });
});

describe("callWithInputValue is called with callback fn on change with input value 'testValue'", () => {
  const callbackFn = jest.fn();
  const changeEvent = {
    target: { value: "testValue" },
  } as ChangeEvent<HTMLInputElement>;

  it("should call callback function with 'testValue' value", () => {
    callWithInputValue(callbackFn)(changeEvent);
    expect(callbackFn).toBeCalledWith("testValue");
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

describe("emptyStringForEmpty is called", () => {
  describe("with undefined value", () => {
    it('should return ""', () => {
      expect(emptyStringForEmpty(undefined)).toBe("");
    });
  });

  describe("with some value", () => {
    it("should return the value", () => {
      expect(emptyStringForEmpty("test")).toBe("test");
    });
  });
});

describe("mapResponseToResult is called with example wikipedia api response", () => {
  describe("with description", () => {
    const exampleWikiResponse: WikipediaApiResponse = {
      batchcomplete: false,
      continue: {
        gpsoffset: 123,
        continue: "",
      },
      query: {
        pages: [
          {
            ns: 1,
            index: 1,
            pageid: 123,
            title: "testTitle",
            description: "testDescription",
          },
          {
            ns: 1,
            index: 1,
            pageid: 1234,
            title: "testTitle2",
          },
        ],
      },
    };
    it("should return properly mapped value", () => {
      expect(mapResponseToResult(exampleWikiResponse)).toEqual([
        {
          pageId: 123,
          title: "testTitle",
          description: "testDescription",
        },
        {
          pageId: 1234,
          title: "testTitle2",
          description: "",
        },
      ]);
    });
  });
});
