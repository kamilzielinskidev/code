import { D, pipe } from "@mobily/ts-belt";
import { ChangeEvent } from "react";

import { Callback } from "../../../../helpers";

// TODO: test
export const callWithValue =
  (cb: Callback<string, void>) =>
  (changeEvent: ChangeEvent<HTMLInputElement>) =>
    pipe(changeEvent, D.getUnsafe("target"), D.getUnsafe("value"), cb);
