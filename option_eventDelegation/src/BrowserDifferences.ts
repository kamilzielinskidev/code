import { flow } from "fp-ts/lib/function";
import * as O from "fp-ts/Option";
import { getParent } from "./utils/getParent";

// 2.
export const getGrandparent = flow(getParent, O.flatMap(getParent));

// 1.
export const getGranparentName = flow(
  getGrandparent,
  O.map((node) => node.nodeName)
);

// 3. done that already

// 4.
export const getGreatGrandparent = flow(getGrandparent, O.flatMap(getParent));

// 5. I've read all points first and planned the implementation upfront. The code scale by adding next getParent line.
// Could be recursive function that takes number of parents to get and returns Option<BrowserNode>.
