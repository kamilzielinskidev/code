import { rateState } from "./rateState";

export const useSelectCurrency = () => {
  const { changeCurrency } = rateState();

  return changeCurrency;
};
