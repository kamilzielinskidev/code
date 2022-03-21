import { useEffect } from "react";

import { O } from "@mobily/ts-belt";

import { getUserFromLocalStorage } from "../service";
import { useAuthState } from "./useAuthState";

export const useReadUserFromLocalStorage = () => {
  const { setUser } = useAuthState();

  useEffect(() => {
    // TODO: extract this
    O.tap(getUserFromLocalStorage(), setUser);
  }, []);
};
