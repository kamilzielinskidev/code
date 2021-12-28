import { useEffect, useState } from "react";
import { StorageKey } from "./models";

const LOCALSTORAGE_EVENT_NAME = "customLocalStorageEvent";

// TODO: separate the logic from react hook
export const useLocalStorage = <A>(key: StorageKey, defaultValue?: A) => {
  const isBrowser = typeof window !== "undefined";
  const [value, setValue] = useState<A>();

  useEffect(() => {
    if (isBrowser) {
      const itemValue = localStorage.getItem(key);
      itemValue !== null
        ? setValue(JSON.parse(itemValue))
        : defaultValue !== null
        ? setValue(defaultValue)
        : setValue(undefined);
    }
  }, [defaultValue, key, isBrowser]);

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener(LOCALSTORAGE_EVENT_NAME, () => {
        const itemValue = localStorage.getItem(key);

        if (itemValue !== null) {
          // TODO: deep equals it
          if (value !== JSON.parse(itemValue)) {
            setValue(JSON.parse(itemValue));
          }
        } else {
          setValue(undefined);
        }
      });
    }
  }, [key, isBrowser, value]);

  const update = (cb: (a: A | null) => A) => {
    if (isBrowser) {
      const currentValue = localStorage.getItem(key);

      const newValue = cb(JSON.parse(currentValue as any));
      localStorage.setItem(key, JSON.stringify(newValue));
      window.dispatchEvent(new CustomEvent(LOCALSTORAGE_EVENT_NAME));
    }
  };

  return [value, update] as const;
};
