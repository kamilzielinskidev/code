import create from "zustand";

import { Currency } from "../../../domain/currency";

type RatesState = {
  iHaveRate: number;
  iWantRate: number;
  currency: Currency["currency"];
  changeIHaveRate: (a: number) => void;
  changeIWantRate: (a: number) => void;
  changeCurrency: (a: Currency["currency"]) => void;
};

export const rateState = create<RatesState>((set) => ({
  iHaveRate: 0,
  iWantRate: 0,
  currency: "CHF",
  changeIHaveRate: (rate) => set({ iHaveRate: rate }),
  changeIWantRate: (rate) => set({ iWantRate: rate }),
  changeCurrency: (currency) => set({ currency }),
}));
