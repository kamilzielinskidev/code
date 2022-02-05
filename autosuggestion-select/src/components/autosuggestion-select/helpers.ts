import { Callback } from "../../helpers";
import {
  PopupHorizontalPosition,
  Styles,
  University,
  UniversityResponse,
} from "./models";

// TODO: test
export const callbackIfElNotInPath =
  (e: MouseEvent) => (el: HTMLElement) => (callback: Callback<void, void>) =>
    !e.composedPath().some((pathEl) => pathEl === el) && callback();

export const callbackIfKeydownEnter =
  (e: KeyboardEvent) => (callback: Callback<void, void>) =>
    e.key === "Escape" && callback();

// TODO: test
export const popupHorizontalPosition =
  (w: Window) => (el: HTMLElement) => (width: number) =>
    w.innerWidth - el.getBoundingClientRect().left > width ? "START" : "END";

// separate function if ex: from bottom or from up will be implemented
export const popupPosition =
  (styles: Styles) => (position: PopupHorizontalPosition) =>
    position === "START" ? styles["from-left"] : styles["from-right"];

export const universityResponseToUniversity = ({
  name,
}: UniversityResponse): University => ({ name });
