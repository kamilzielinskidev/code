import axios from "axios";

const okStatus = <A>(data: A) => <const>{ status: "OK", data };
const errorStatus = <A>(data: A) => <const>{ status: "ERROR", data };

export const get = <A, B>(url: string) =>
  axios
    .get<B>(url)
    .then((a) => okStatus(a.data))
    .catch((e: A) => errorStatus(e));
