import { A, D, pipe } from "@mobily/ts-belt";

import { CurrenciesResponse } from "./api";
import { AvailableRate } from "./domain/availableRate";

export const mapCurrenciesResponseToCurrenciesList = (a: CurrenciesResponse) =>
  A.map(a, (a) =>
    pipe(a, D.getUnsafe("code"), (code) => AvailableRate({ code }))
  );
