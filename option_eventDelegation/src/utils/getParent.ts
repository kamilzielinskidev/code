import * as O from "fp-ts/Option";
import { BrowserNode } from "../lib/browserAPI";

export const getParent = (node: BrowserNode) => O.fromNullable(node.parentNode);
