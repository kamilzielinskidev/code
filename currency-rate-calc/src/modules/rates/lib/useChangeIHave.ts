import { F, pipe } from "@mobily/ts-belt";

import { andThen, hasValue, toString } from "../../../helpers";
import { divideByRate } from "../service";
import { rateState } from "./rateState";

export const useChangeIHave = () => {
  const { changeIHave, currency, changeIWant } = rateState();

  const change = (iHave: string) => {
    changeIHave(iHave);

    if (hasValue(iHave))
      pipe(
        iHave,
        parseFloat,
        divideByRate(currency),
        andThen((v) => pipe(v, toString, changeIWant))
      );
  };

  return change;
};
