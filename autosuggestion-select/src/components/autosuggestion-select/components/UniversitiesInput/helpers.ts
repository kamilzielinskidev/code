import { ChangeEvent } from "react";

import { D, pipe } from "@mobily/ts-belt";

import { andThen, Callback } from "../../../../helpers";
import { fetchUniversities } from "../../api";
import { University } from "../../models";

// TODO: test
export const getUniversities =
  (cb: Callback<University[], void>) =>
  (changeEvent: ChangeEvent<HTMLInputElement>) =>
    pipe(
      changeEvent,
      D.getUnsafe("target"),
      D.getUnsafe("value"),
      fetchUniversities,
      andThen(cb)
    );
