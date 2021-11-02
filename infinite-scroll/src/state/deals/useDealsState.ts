import { useEffect, useState } from "react";
import { Subject, takeUntil, tap } from "rxjs";

import { Deals } from "../../domain/deal";
import { deals$, dealsAction$ } from "./deals";

export const useDealsState = () => {
  const [deals, setDeals] = useState<Deals>([]);
  const detach = new Subject<void>();

  useEffect(() => {
    deals$.pipe(takeUntil(detach), tap(setDeals)).subscribe();
    return () => detach.next();
  }, []);

  return {
    deals,
    clear: () => dealsAction$.next({ type: "CLEAR" }),
    push: (deals: Deals) => dealsAction$.next({ type: "PUSH", payload: deals }),
  };
};
