import { useLocalStorage } from "usehooks-ts";

import { User } from "../domain/user";

export const useUserInLocalStorage = () => {
  return useLocalStorage<User | null>("user", null);
};
