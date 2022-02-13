import { get } from "../lib/fetch";

const CURRENCIES_API =
  "https://api.nbp.pl/api/exchangerates/tables/a?format=json";

export type CurrenciesResponse = {
  currency: string;
  code: string;
  mid: number;
}[];

export const fetchCurrencies = () => get<CurrenciesResponse>(CURRENCIES_API);
