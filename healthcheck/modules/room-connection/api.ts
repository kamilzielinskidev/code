import { R } from "@mobily/ts-belt";

import { authPost } from "../api/authRequest";

const MOCK_RSEPONSE = () =>
  Math.random() < 1
    ? R.Ok(
        new Promise<R.Result<{ message: string }, { message: string }>>(
          (res) => {
            setTimeout(() => {
              res(
                Math.random() < 1
                  ? R.Ok({ message: "ok" })
                  : R.Error({ message: "error" })
              );
            }, 500);
          }
        )
      )
    : R.Error({ message: "UNAUTHENTICATED" });

export const createARoomRequest = (roomName: string) => MOCK_RSEPONSE();
// TODO: api response with room id etc.
// authPost<{ message: string }, { message: string }>("", { roomName });

export const joinARoomRequest = (roomName: string) => MOCK_RSEPONSE();
