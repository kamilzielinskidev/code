import { O, pipe } from "@mobily/ts-belt";
import { AxiosResponse } from "axios";

export const callIfNotNull =
  <A>(callback: (a: A) => void) =>
  (value: A) => {
    pipe(O.fromNullable(value), O.tap(callback));
  };

export const getData = <A>(axiosResponse: AxiosResponse<A>) =>
  axiosResponse.data;
