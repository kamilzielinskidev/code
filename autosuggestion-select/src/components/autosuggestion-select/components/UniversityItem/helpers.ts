import { D, pipe } from "@mobily/ts-belt";
import { ChangeEvent } from "react";

import { Callback } from "../../../../helpers";

export const check =
  (cb: Callback<boolean, void>) =>
  (changeEvent: ChangeEvent<HTMLInputElement>) =>
    pipe(changeEvent, D.getUnsafe("target"), D.getUnsafe("checked"), cb);
