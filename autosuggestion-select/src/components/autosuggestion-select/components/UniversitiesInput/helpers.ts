import { ChangeEvent } from "react";

import { D, pipe } from "@mobily/ts-belt";

import { andThen, Callback } from "../../../../helpers";
import { fetchUniversities } from "../../api";
import { University } from "../../models";

// TODO: test
export const pluckValue = (changeEvent: ChangeEvent<HTMLInputElement>) =>
  pipe(changeEvent, D.getUnsafe("target"), D.getUnsafe("value"));

export const getUniversities =
  (cb: Callback<University[], void>) => (query: string) =>
    pipe(query, fetchUniversities, andThen(cb));

export const callWithValue =
  (cb: Callback<string, void>) =>
  (changeEvent: ChangeEvent<HTMLInputElement>) =>
    pipe(changeEvent, pluckValue, cb);
