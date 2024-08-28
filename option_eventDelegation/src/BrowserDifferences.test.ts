import { getGranparentName, getGreatGrandparent } from "./BrowserDifferences";
import { BrowserNode } from "./lib/browserAPI";
import * as O from "fp-ts/Option";

describe("getGranparentName", () => {
  it("should return None if parent or grandparent is not present", () => {
    const noParentNode: BrowserNode = {
      nodeName: "div",
      parentNode: null,
    };
    expect(getGranparentName(noParentNode)).toEqual(O.none);

    const noGrandparentNode: BrowserNode = {
      nodeName: "div",
      parentNode: {
        nodeName: "div",
        parentNode: null,
      },
    };

    expect(getGranparentName(noGrandparentNode)).toEqual(O.none);
  });
});

it("should return grandparent name if both parent and grandparent are present", () => {
  const parentNode: BrowserNode = {
    nodeName: "div1",
    parentNode: {
      nodeName: "div2",
      parentNode: {
        nodeName: "div3",
        parentNode: null,
      },
    },
  };

  expect(getGranparentName(parentNode)).toEqual(O.some("div3"));
});

describe("getGreatGrandparent", () => {
  it("should return None if parent, grandparent or great grandparent is not present", () => {
    const noParentNode: BrowserNode = {
      nodeName: "div",
      parentNode: null,
    };
    expect(getGreatGrandparent(noParentNode)).toEqual(O.none);

    const noGrandparentNode: BrowserNode = {
      nodeName: "div",
      parentNode: {
        nodeName: "div",
        parentNode: null,
      },
    };

    expect(getGreatGrandparent(noGrandparentNode)).toEqual(O.none);

    const noGreatGrandparentNode: BrowserNode = {
      nodeName: "div",
      parentNode: {
        nodeName: "div",
        parentNode: {
          nodeName: "div",
          parentNode: null,
        },
      },
    };

    expect(getGreatGrandparent(noGreatGrandparentNode)).toEqual(O.none);
  });

  it("should return great grandparent name if parent, grandparent and great grandparent are present", () => {
    const greatGrandparentNode: BrowserNode = {
      nodeName: "div4",
      parentNode: null,
    };

    const parentNode: BrowserNode = {
      nodeName: "div1",
      parentNode: {
        nodeName: "div2",
        parentNode: {
          nodeName: "div3",
          parentNode: greatGrandparentNode,
        },
      },
    };

    expect(getGreatGrandparent(parentNode)).toEqual(
      O.some(greatGrandparentNode)
    );
  });
});
