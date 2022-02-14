import { pipe } from "@mobily/ts-belt";
import { useEffect } from "react";

import { andThen } from "../../../helpers";
import { getRates } from "../api";
import { changeAvailableRates } from "./availableRatesState";

export const getRatesCb = () => {
  pipe(getRates(), andThen(changeAvailableRates));
};

export const useGetRates = () => {
  useEffect(getRatesCb, []);
};
