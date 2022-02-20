import { FC } from "react";

import { currencies, Currency } from "../../../domain/currency";
import { useCurrency } from "../../rates/lib/useCurrency";
import { useIWant } from "../../rates/lib/useIWant";

export const IGetInput: FC = () => {
  const [currency, selectCurrency] = useCurrency();
  const [iWant, changeIWant] = useIWant();

  return (
    <div>
      <div>I get:</div>
      <div>
        <input value={iWant} onChange={(e) => changeIWant(e.target.value)} />
        <select
          value={currency}
          onChange={(e) => {
            const value = e.target.value as Currency;
            const currency = Currency(value);
            selectCurrency(currency);
          }}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
