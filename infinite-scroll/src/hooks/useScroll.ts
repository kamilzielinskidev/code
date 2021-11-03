import { useEffect, useRef, useState } from "react";
import { fromEvent, map, pluck, Subject, takeUntil, tap } from "rxjs";

export const useScroll = <T extends HTMLElement>() => {
  const [isScrollAtBottom, setIsScrollAtBottom] = useState<boolean>(false);

  const detach = new Subject<void>();

  const ref = useRef<T>();

  useEffect(() => {
    fromEvent<{ target: T }>(ref.current, "scroll")
      .pipe(
        takeUntil(detach),
        pluck("target"),
        map(
          ({ scrollHeight, scrollTop, clientHeight }) =>
            scrollHeight === clientHeight + scrollTop
        ),
        tap(setIsScrollAtBottom)
      )
      .subscribe();

    return () => detach.next();
  });

  return {
    ref,
    isScrollAtBottom,
  };
};
