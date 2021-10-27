import { ChangeEvent } from "react";
import { getInputValue, prependWith, searchHeaderText } from "./PF";

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
