import { MenuItem, NativeSelect, Select } from "@mui/material";
import React, { FC } from "react";
import { currencies } from "../../../domain/currency";

import { useSelectCurrency } from "../../rates/lib/useChangeCurrency";
import { useRateState } from "../../rates/lib/useRateState";
import { Currency } from "../../../domain/currency";
export const App: FC = () => {
  const selectCurrency = useSelectCurrency();
  const { currency, iHaveRate, iWantRate } = useRateState();

  return (
    <div>
      {currency}
      <Select
        value={currency}
        label="Currency"
        onChange={(e) => selectCurrency(e.target.value as Currency["currency"])}
      >
        {currencies.map((currency) => (
          <MenuItem value={currency.currency}>
            {currency.icon} {currency.currency}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
