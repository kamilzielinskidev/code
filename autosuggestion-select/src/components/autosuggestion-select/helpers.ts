import { A, D } from "@mobily/ts-belt";
import { Styles } from "../../models";
import { Universities } from "./domains/university";
import { PopupHorizontalPosition } from "./models";

// TODO: test
export const popupHorizontalPosition =
  (w: Window) => (el: HTMLElement) => (width: number) =>
    w.innerWidth - el.getBoundingClientRect().left > width ? "START" : "END";

// separate function if ex: from bottom or from up will be implemented
export const popupPosition =
  (styles: Styles) => (position: PopupHorizontalPosition) =>
    position === "START" ? styles["from-left"] : styles["from-right"];

export const clearUniversities = (universities: Universities) =>
  A.map(universities, D.getUnsafe("name"));
