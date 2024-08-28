import { BrowserNode } from "./lib/browserAPI";
import * as O from "./Option";
import {
  getGrandparentName,
  getGrandparentName2,
  getGreatGrandparent,
  getParentOrSelf,
} from "./Option";

describe("Option", () => {
  it("isSome returns true for Some", () => {
    const option = O.of(5);
    expect(O.isSome(option)).toBe(true);
  });
  it("isSome returns false for None", () => {
    const option = O.of(null);
    expect(O.isSome(option)).toBe(false);
  });
  it("getOrDie returns value for Some", () => {
    const option = O.of(5);
    expect(O.getOrDie(option)).toBe(5);
  });
  it("getOrDie throws for None", () => {
    const option = O.of(null);
    expect(() => O.getOrDie(option)).toThrow("Option is None");
  });
  it('fold returns "some Some value" for Some and "some None value" for None', () => {
    const option = O.of(5);
    const onNone = () => "some None value";
    const onSome = (a: number) => `some Some ${a}`;
    expect(O.fold(onNone, onSome)(option)).toBe("some Some 5");

    const option2 = O.of(null as unknown as number); // casting to unknown to avoid type error, in real code it would be unknown value
    expect(O.fold(onNone, onSome)(option2)).toBe("some None value");
  });
});

describe("getGrandparentName", () => {
  it("should throw if parent or grandparent is not present", () => {
    const noParentNode: BrowserNode = {
      nodeName: "div",
      parentNode: null,
    };
    expect(() => getGrandparentName(noParentNode)).toThrow("Option is None");

    const noGrandparentNode: BrowserNode = {
      nodeName: "div",
      parentNode: {
        nodeName: "div",
        parentNode: null,
      },
    };

    expect(() => getGrandparentName(noGrandparentNode)).toThrow(
      "Option is None"
    );
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

    expect(getGrandparentName(parentNode)).toEqual("div3");
  });
});

describe("getGrandparentName2", () => {
  it("should return None if parent or grandparent is not present", () => {
    const noParentNode: BrowserNode = {
      nodeName: "div",
      parentNode: null,
    };
    expect(getGrandparentName2(noParentNode)).toEqual(O.none);

    const noGrandparentNode: BrowserNode = {
      nodeName: "div",
      parentNode: {
        nodeName: "div",
        parentNode: null,
      },
    };

    expect(getGrandparentName2(noGrandparentNode)).toEqual(O.none);
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

    expect(getGrandparentName2(parentNode)).toEqual(O.some("div3"));
  });
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

describe("getParentOrSelf", () => {
  it("should return self if parent is not present", () => {
    const noParentNode: BrowserNode = {
      nodeName: "div",
      parentNode: null,
    };
    expect(getParentOrSelf(noParentNode)).toEqual(noParentNode);
  });

  it("should return parent if parent is present", () => {
    const parent = {
      nodeName: "div2",
      parentNode: null,
    };

    const withParentNode: BrowserNode = {
      nodeName: "div1",
      parentNode: parent,
    };

    expect(getParentOrSelf(withParentNode)).toEqual(parent);
  });
});
