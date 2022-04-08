import { F, O, pipe, R } from "@mobily/ts-belt";
import { post } from "../../lib/axios/request";
import { useAuthState } from "../auth/lib/useAuthState";

const getUser = () => useAuthState.getState().user;

// TODO: move this to hook? useAuthRequest(url, data)
export const authPost = <E = unknown, A = unknown, B = unknown>(
  url: string,
  data: B
) =>
  pipe(
    getUser(),
    O.toResult("UNAUTHENTICATED"),
    R.map((user) =>
      post<E, A, B>(url, data, { headers: { Authentication: user.name } })
    )
  );
