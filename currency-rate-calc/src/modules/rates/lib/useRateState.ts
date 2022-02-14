import { rateState } from "./rateState";

export const useRateState = () => {
  const { currency, iHaveRate, iWantRate } = rateState();

  return { currency, iHaveRate, iWantRate };
};
