import create from "zustand";

import { Currency } from "../../../domain/currency";

type RatesState = {
  iHave: string;
  iWant: string;
  currency: Currency;
  changeIHave: (a: string) => void;
  changeIWant: (a: string) => void;
  changeCurrency: (a: Currency) => void;
};

export const rateState = create<RatesState>((set) => ({
  iHave: "0",
  iWant: "0",
  currency: "CHF",
  changeIHave: (amount) => set({ iHave: amount }),
  changeIWant: (amount) => set({ iWant: amount }),
  changeCurrency: (currency) => set({ currency }),
}));
