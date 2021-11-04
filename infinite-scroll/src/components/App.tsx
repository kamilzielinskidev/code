import { add, not } from "ramda";
import { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import {
  filter,
  from,
  fromEvent,
  map,
  mapTo,
  merge,
  Observable as O,
  pluck,
  scan,
  shareReplay,
  startWith,
  switchMap,
  tap,
  throttle,
} from "rxjs";

import { DealsResponse, getDealsResponse } from "../api/dealsResponse";
import { Deals } from "../domain/deal";
import { DealCard } from "./DealCard";
import { mapApiDealResponseToDeal } from "../service";

export const App: FC = () => {
  const ref = useRef<HTMLDivElement>();

  const [deals, setDeals] = useState([] as Deals);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const scroll$: O<SyntheticEvent<HTMLDivElement, Event>> = fromEvent<
      SyntheticEvent<HTMLDivElement>
    >(ref.current, "scroll");

    const isAtBottom$: O<EventTarget & HTMLDivElement> = scroll$.pipe(
      pluck("currentTarget"),
      filter(
        ({ scrollTop, clientHeight, scrollHeight }) =>
          scrollTop + clientHeight === scrollHeight
      )
    );

    const page$: O<number> = isAtBottom$.pipe(
      throttle(() => isLoading$.pipe(filter(not))),
      scan(add(1), 0),
      startWith(0)
    );

    const dealsResponse$: O<DealsResponse> = page$.pipe(
      switchMap((page) => from(getDealsResponse(page))),
      shareReplay()
    );

    // TODO: try to change to separate startLoading$ stopLoading$ and other obs too in similar way
    // setPage$, getDeals$ etc.
    const isLoading$: O<boolean> = merge(
      isAtBottom$.pipe(mapTo(true)),
      dealsResponse$.pipe(mapTo(false))
    );

    const deals$: O<Deals> = dealsResponse$.pipe(
      map((deals) => deals.map(mapApiDealResponseToDeal)),
      scan((acc, newDeals) => [...acc, ...newDeals], [] as Deals)
    );

    deals$.pipe(tap(setDeals)).subscribe();
    isLoading$.pipe(tap(setIsLoading)).subscribe();
  }, []);

  return (
    <div className="flex flex-col justify-center h-screen">
      <div
        className="h-96 overflow-scroll border-solid rounded-md border border-black flex flex-col gap-3"
        ref={ref}
      >
        {deals.map((props, i) => (
          <DealCard key={i} {...props} />
        ))}
        {isLoading && "Loading..."}
      </div>
    </div>
  );
};
