import create from "zustand";

import { AvailableRates } from "../../../domain/availableRate";

type AvailableRatesState = {
  availableRates: AvailableRates;
  changeAvailableRates: (a: AvailableRates) => void;
};

export const availableRatesState = create<AvailableRatesState>((set) => ({
  availableRates: [],
  changeAvailableRates: (availableRates) => set({ availableRates }),
}));

export const changeAvailableRates =
  availableRatesState.getState().changeAvailableRates;
