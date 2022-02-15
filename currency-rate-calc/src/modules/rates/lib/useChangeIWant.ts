import { pipe } from "@mobily/ts-belt";

import { andThen, hasValue, toString } from "../../../helpers";
import { multiplyByRate } from "../service";
import { rateState } from "./rateState";

export const useChangeIWant = () => {
  const { changeIHave, currency, changeIWant } = rateState();

  const change = (iWant: string) => {
    changeIWant(iWant);

    if (hasValue(iWant))
      pipe(
        iWant,
        parseFloat,
        multiplyByRate(currency),
        andThen((v) => pipe(v, toString, changeIHave))
      );
  };

  return change;
};
