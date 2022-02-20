import { pipe } from "@mobily/ts-belt";
import { useEffect, useState } from "react";

import { andThen, toString } from "../../../helpers";
import { useDebounce } from "../../../lib/useDebounce";
import { divideByRate, isStringANumber } from "../service";
import { rateState } from "./rateState";

export const useIHave = () => {
  const { currency, changeIWant, iHave, changeIHave } = rateState();
  const [iHaveValue, changeIHaveValue] = useState(iHave);
  const debouncedIHaveValue = useDebounce(iHave);

  useEffect(() => {
    if (iHaveValue !== iHave) changeIHave(iHaveValue);
  }, [iHaveValue]);

  useEffect(() => {
    // TODO: test
    isStringANumber(debouncedIHaveValue)
      ? pipe(
          debouncedIHaveValue,
          parseFloat,
          divideByRate(currency),
          andThen((v) => pipe(v, toString, changeIWant))
        )
      : changeIWant("-");
  }, [debouncedIHaveValue]);

  return <const>[iHave, changeIHaveValue];
};
