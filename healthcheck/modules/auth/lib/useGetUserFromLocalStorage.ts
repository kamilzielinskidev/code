import { useEffect } from "react";

import { callIfNotNull } from "../../../common/helpers";
import { useAuthState } from "./useAuthState";
import { useUserInLocalStorage } from "./useUserInLocalStorage";

export const useGetUserFromLocalStorage = () => {
  const [localStorageUser] = useUserInLocalStorage();
  const { setUser } = useAuthState();

  useEffect(() => callIfNotNull(setUser)(localStorageUser), []);
};
