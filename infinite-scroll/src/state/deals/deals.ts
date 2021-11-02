import { ReplaySubject, scan, startWith } from "rxjs";

import { Deals } from "../../domain/deal";
import { Action, ActionPaylod } from "../common";

type PushAction = ActionPaylod<"PUSH", Deals>;

type ClearAction = Action<"CLEAR">;

type DealsAction = PushAction | ClearAction;

const initialDeals: Deals = [];

const dealsReducer = (acc: Deals, action: DealsAction) => {
  switch (action.type) {
    case "CLEAR":
      return [] as Deals;
    case "PUSH":
      return [...acc, ...action.payload];
  }
};

export const dealsAction$ = new ReplaySubject<DealsAction>();

export const deals$ = dealsAction$.pipe(
  scan(dealsReducer, initialDeals),
  startWith([] as Deals)
);

// TODO: use the lib that lets keep state in web service
