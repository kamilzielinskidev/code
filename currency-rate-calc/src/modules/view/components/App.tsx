import React, { FC } from "react";

import { availableRatesState } from "../../availableRates/lib/availableRatesState";
import { useGetRates } from "../../availableRates/lib/useGetRates";

export const App: FC = () => {
  useGetRates();
  const { availableRates } = availableRatesState();

  return (
    <div>
      {availableRates.map((availableRate) => (
        <div key={availableRate.code}>{availableRate.code}</div>
      ))}
    </div>
  );
};
