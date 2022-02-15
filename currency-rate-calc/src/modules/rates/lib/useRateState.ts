import { rateState } from "./rateState";

export const useRateState = () => {
  const { currency, iHave, iWant } = rateState();

  return { currency, iHave, iWant };
};
