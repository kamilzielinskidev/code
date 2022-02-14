import { A, D, pipe } from "@mobily/ts-belt";

import { AvailableRate } from "../../domain/availableRate";
import { andThen } from "../../helpers";
import { get } from "../../lib/fetch";

const CURRENCIES_API =
  "https://api.nbp.pl/api/exchangerates/tables/a?format=json";

type RatesResponse = {
  table: string;
  no: string;
  effectiveDate: string;
  rates: { currency: string; code: string; mid: number }[];
}[];

export const mapRatesResponseToRatesList = (response: RatesResponse) =>
  pipe(
    response,
    A.getUnsafe(0),
    D.getUnsafe("rates"),
    A.map(({ code }) => AvailableRate({ code }))
  );

export const getRates = () =>
  pipe(
    get<RatesResponse>(CURRENCIES_API),
    andThen(mapRatesResponseToRatesList)
  );
