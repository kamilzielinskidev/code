import { pipe } from "@mobily/ts-belt";
import { Currency } from "../../domain/currency";

import { Rate } from "../../domain/rate";
import { andThen } from "../../helpers";
import { get } from "../../lib/fetch";

const CURRENCIES_API = (rate: Currency) =>
  `https://api.nbp.pl/api/exchangerates/rates/a/${rate.currency}?format=json`;

type RateResponse = {
  table: string;
  currency: string;
  code: string;
  rates: { no: number; effectiveDate: number; mid: number }[];
};

const mapResponseRateToRate = (response: RateResponse) =>
  pipe(
    response,
    ({
      code,
      rates: {
        0: { effectiveDate, mid },
      },
    }) => Rate({ code: code, date: new Date(effectiveDate), value: mid })
  );

export const getRate = (rate: Currency) =>
  pipe(get<RateResponse>(CURRENCIES_API(rate)), andThen(mapResponseRateToRate));
