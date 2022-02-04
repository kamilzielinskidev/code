import { Callback } from "../../helpers";

// TODO: test
export const popupHorizontalPosition =
  (w: Window) => (el: HTMLElement) => (width: number) =>
    w.innerWidth - el.getBoundingClientRect().left > width ? "START" : "END";

export const callbackIfElNotInPath =
  (e: MouseEvent) => (el: HTMLElement) => (callback: Callback<void, void>) =>
    !e.composedPath().some((pathEl) => pathEl === el) && callback();
