import { D, N, pipe } from "@mobily/ts-belt";

import { Currency } from "../../domain/currency";
import { andThen } from "../../helpers";
import { getRate } from "./api";

export const cutDecimals = (value: number) =>
  pipe(
    value,
    (a) => a.toFixed(4),
    (a) => parseFloat(a)
  );

export const isStringANumber = (value: string) => !isNaN(parseFloat(value));

export const divideByRate = (currency: Currency) => (value: number) =>
  pipe(
    getRate(currency),
    andThen((a) =>
      pipe(
        a,
        D.getUnsafe("value"),
        (rateValue) => N.divide(rateValue)(value),
        cutDecimals
      )
    )
  );

export const multiplyByRate = (currency: Currency) => (value: number) =>
  pipe(
    getRate(currency),
    andThen((a) =>
      pipe(
        a,
        D.getUnsafe("value"),
        (rateValue) => N.multiply(rateValue)(value),
        cutDecimals
      )
    )
  );
