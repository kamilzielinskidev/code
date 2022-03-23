import { R } from "@mobily/ts-belt";
import { authPost } from "../api/authRequest";

const MOCK_RSEPONSE = R.Ok(
  Promise.resolve(
    Math.random() < 0.5
      ? R.Ok({ message: "ok" })
      : R.Error({ message: "error" })
  )
);

export const createARoomRequest = (roomName: string) => MOCK_RSEPONSE;
// TODO: api response with room id etc.
// authPost<{ message: string }, { message: string }>("", { roomName });
