import { pipe } from "@mobily/ts-belt";

import { andThen } from "../helpers";
import { fetchCurrencies } from "./api";
import { mapCurrenciesResponseToCurrenciesList } from "./helpers";

export const getCurrencies = () =>
  pipe(fetchCurrencies(), andThen(mapCurrenciesResponseToCurrenciesList));
