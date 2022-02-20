import { pipe } from "@mobily/ts-belt";
import { useEffect, useState } from "react";

import { andThen, toString } from "../../../helpers";
import { useDebounce } from "../../../lib/useDebounce";
import { isStringANumber, multiplyByRate } from "../service";
import { rateState } from "./rateState";

export const useIWant = () => {
  const { currency, changeIHave, iWant, changeIWant } = rateState();
  const [iWantValue, changeIWantValue] = useState(iWant);
  const debouncedIWantValue = useDebounce(iWant);

  useEffect(() => {
    if (iWantValue !== iWant) changeIWant(iWantValue);
  }, [iWantValue]);

  useEffect(() => {
    // TODO: test
    isStringANumber(debouncedIWantValue)
      ? pipe(
          debouncedIWantValue,
          parseFloat,
          multiplyByRate(currency),
          andThen((v) => pipe(v, toString, changeIHave))
        )
      : changeIHave("-");
  }, [debouncedIWantValue]);

  return <const>[iWant, changeIWantValue];
};
