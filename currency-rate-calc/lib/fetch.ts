import axios, { AxiosResponse } from "axios";

import { D, pipe } from "@mobily/ts-belt";

import { andThen } from "../helpers";

// TODO: use Optional here
export const andThenPluckData = <A>(a: Promise<AxiosResponse<A>>) =>
  pipe(a, andThen(D.getUnsafe("data")));

export const get = <T>(url: string) =>
  pipe(axios.get<T>(url), andThenPluckData);
