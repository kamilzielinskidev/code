import { A, D } from "@mobily/ts-belt";
import { CurrenciesResponse } from "./api";

export const mapCurrenciesResponseToCurrenciesList = (a: CurrenciesResponse) =>
  A.map(a, D.getUnsafe("code"));
