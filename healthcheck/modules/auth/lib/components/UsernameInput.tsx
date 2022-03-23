import { FC } from "react";

import { D, O, pipe } from "@mobily/ts-belt";

import { Input } from "../../../../common/components/Input";
import { mapTextToUser } from "../../service";
import { useAuthState } from "../useAuthState";
import { useUserInLocalStorage } from "../useUserInLocalStorage";

export const UsernameInput: FC = () => {
  const { user, setUser } = useAuthState();
  const [_, setUserInLocalStorage] = useUserInLocalStorage();

  return (
    <Input
      label="Username"
      value={O.mapWithDefault(user, "", D.getUnsafe("name"))}
      onChange={(v) =>
        pipe(v.target.value, mapTextToUser, (user) => {
          setUser(user);
          setUserInLocalStorage(() => user);
        })
      }
    />
  );
};
