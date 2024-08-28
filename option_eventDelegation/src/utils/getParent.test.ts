import { BrowserNode } from "../lib/browserAPI";
import { getParent } from "./getParent";
import * as O from "fp-ts/Option";

const browserXYApiNodeNone: BrowserNode = {
  parentNode: undefined,
  nodeName: "test1",
};

const browserZApiNodeNone: BrowserNode = {
  parentNode: null,
  nodeName: "test2",
};

const browserNodeSome: BrowserNode = {
  nodeName: "child",
  parentNode: {
    nodeName: "parent",
    parentNode: undefined,
  },
};

describe("getParent", () => {
  it("should return None when parentNode is undefined", () => {
    expect(getParent(browserXYApiNodeNone)).toEqual(O.none);
  });

  it("should return None when parentNode is null", () => {
    expect(getParent(browserZApiNodeNone)).toEqual(O.none);
  });

  it("should return Some when parentNode is defined", () => {
    expect(getParent(browserNodeSome)).toEqual(
      O.some(browserNodeSome.parentNode)
    );
  });
});
