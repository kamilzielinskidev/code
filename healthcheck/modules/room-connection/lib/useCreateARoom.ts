import { useRouter } from "next/router";

import { F, pipe, R } from "@mobily/ts-belt";

import { useAlert } from "../../alert/lib/useAlert";
import { createARoomRequest } from "../api";
import { useCreateARoomState } from "./useCreateARoomState";

export const useCreateARoom = () => {
  const { setIsLoading } = useCreateARoomState();
  const { successAlert, errorAlert } = useAlert();
  const { push } = useRouter();

  const setIsLoadingTrue = () => setIsLoading(true);
  const setIsLoadingFalse = () => setIsLoading(false);
  const pushToRoom = () => push("/room");

  const createARoom = (roomName: string) =>
    pipe(
      roomName,
      F.tap(setIsLoadingTrue),
      createARoomRequest,
      R.tapError(errorAlert),
      R.tapError(setIsLoadingFalse),
      R.tap((request) =>
        request
          .then((response) =>
            pipe(
              response,
              R.tap((res) => successAlert(res.message)),
              R.tap(pushToRoom),
              R.tapError((err) => errorAlert(err.message))
            )
          )
          .finally(F.tap(setIsLoadingFalse))
      )
    );

  return { createARoom };
};
