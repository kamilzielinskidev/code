type CurrencyT = "CHF" | "EUR" | "USD";

export type Currency = Readonly<CurrencyT>;

export type Currencies = ReadonlyArray<CurrencyT>;

export const Currency = (currency: Currency) => currency;

export const currencies = <Currencies>["CHF", "EUR", "USD"];
