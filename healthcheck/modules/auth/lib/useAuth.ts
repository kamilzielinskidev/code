import { O } from "@mobily/ts-belt";

import { User } from "../../../domain/user";
import { changeUserInLocalStorate } from "../service";
import { useAuthState } from "./useAuthState";

export const useAuth = () => {
  const { user, setUser: stateSetUser } = useAuthState();

  const setUser = (user: O.Option<User>) => {
    stateSetUser(user);
    changeUserInLocalStorate(user);
  };

  return { user, setUser };
};
