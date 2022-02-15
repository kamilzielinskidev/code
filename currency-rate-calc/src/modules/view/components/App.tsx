import React, { FC } from "react";

import { currencies, Currency } from "../../../domain/currency";
import { useSelectCurrency } from "../../rates/lib/useChangeCurrency";
import { useChangeIHave } from "../../rates/lib/useChangeIHave";
import { useChangeIWant } from "../../rates/lib/useChangeIWant";
import { useRateState } from "../../rates/lib/useRateState";

export const App: FC = () => {
  const selectCurrency = useSelectCurrency();
  const changeIWant = useChangeIWant();
  const changeIHave = useChangeIHave();

  const { currency, iHave, iWant } = useRateState();

  return (
    <div>
      <div>
        <div>I have:</div>
        <div>
          <input
            type="number"
            min={0}
            value={iHave}
            onChange={(e) => changeIHave(e.target.value)}
          />
          PLN
        </div>
      </div>
      <div>
        <div>I get:</div>
        <div>
          <input
            type="number"
            min={0}
            value={iWant}
            onChange={(e) => changeIWant(e.target.value)}
          />
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
    </div>
  );
};
