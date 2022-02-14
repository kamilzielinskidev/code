import { availableRatesState } from "./availableRatesState";

export const useAvailableRates = () =>
  availableRatesState.getState().availableRates;
