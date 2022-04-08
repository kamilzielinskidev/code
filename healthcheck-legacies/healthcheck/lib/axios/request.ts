import { pipe, R } from "@mobily/ts-belt";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getData } from "../../common/helpers";

export const get = <A>(url: string, config?: AxiosRequestConfig) =>
  axios.get<NonNullable<A>>(url, config).then(
    (v) => pipe(v, getData, R.Ok),
    (v) => pipe(v, R.Error)
  );

export const post = <E, A, B>(
  url: string,
  data: B,
  config?: AxiosRequestConfig
) =>
  axios
    .post<NonNullable<A>, AxiosResponse<NonNullable<A>>, B>(url, data, config)
    .then(
      (v) => pipe(v, getData, R.Ok),
      (v) => R.Error<E>(v)
    );
