type CurrencyTemplate<Icon extends string, Code extends string> = {
  currency: Code;
  icon: Icon;
};

type CurrencyT =
  | CurrencyTemplate<"🇨🇭", "CHF">
  | CurrencyTemplate<"🇺🇸", "USD">
  | CurrencyTemplate<"🇪🇺", "EUR">;

export type Currency = Readonly<CurrencyT>;

export type Currencies = ReadonlyArray<CurrencyT>;

export const currencies = <Currencies>[
  { currency: "CHF", icon: "🇨🇭" },
  { currency: "EUR", icon: "🇪🇺" },
  { currency: "USD", icon: "🇺🇸" },
];
