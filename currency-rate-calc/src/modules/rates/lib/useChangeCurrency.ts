import { pipe } from "@mobily/ts-belt";

import { Currency } from "../../../domain/currency";
import { andThen, toString } from "../../../helpers";
import { divideByRate } from "../service";
import { rateState } from "./rateState";

export const useSelectCurrency = () => {
  const { changeCurrency, iHave, changeIWant } = rateState();

  const selectCurrency = (currency: Currency) => {
    pipe(
      iHave,
      parseFloat,
      divideByRate(currency),
      andThen((value) => pipe(value, toString, changeIWant))
    );
    changeCurrency(currency);
  };

  return selectCurrency;
};
