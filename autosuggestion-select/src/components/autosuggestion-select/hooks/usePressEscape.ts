import { useEffect } from "react";

import { Callback } from "../../../helpers";
import { callbackIfKeydownEnter } from "../helpers";

export const usePressEscape = (callback: Callback<void, void>) => {
  useEffect(() => {
    const usePressEscape = (e: KeyboardEvent) => {
      callbackIfKeydownEnter(e)(callback);
    };

    document.addEventListener("keydown", usePressEscape);
    return () => document.removeEventListener("keydown", usePressEscape);
  }, []);
};
