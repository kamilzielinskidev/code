import { RefObject, useEffect } from "react";

import { Callback, callbackIfElNotInPath } from "../../../helpers";

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: Callback<void, void>
) => {
  useEffect(() => {
    const useClickOutside = (e: MouseEvent) =>
      ref.current && callbackIfElNotInPath(e)(ref.current)(callback);

    document.addEventListener("click", useClickOutside);
    return () => document.removeEventListener("click", useClickOutside);
  }, []);
};
