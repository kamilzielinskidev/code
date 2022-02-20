import { pipe } from "@mobily/ts-belt";
import { useEffect } from "react";

import { andThen, toString } from "../../../helpers";
import { divideByRate } from "../service";
import { rateState } from "./rateState";

export const useCurrency = () => {
  const { changeCurrency, currency, iHave, changeIWant } = rateState();

  useEffect(() => {
    pipe(
      iHave,
      parseFloat,
      divideByRate(currency),
      andThen((value) => pipe(value, toString, changeIWant))
    );
  }, [currency]);

  return <const>[currency, changeCurrency];
};
