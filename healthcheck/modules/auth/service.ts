import { O, pipe } from "@mobily/ts-belt";

import { User } from "../../domain/user";

const localStorageGetItem = (key: string) =>
  typeof window !== "undefined"
    ? O.fromNullable(localStorage.getItem(key))
    : O.None;

const localStorageSetItem = (key: string) => (value: string) =>
  typeof window !== "undefined" && localStorage.setItem(key, value);

const localStorageDeleteItem = (key: string) =>
  typeof window !== "undefined" && localStorage.removeItem(key);

export const getUserFromLocalStorage = () =>
  pipe(
    localStorageGetItem("user"),
    O.map(
      (localStorageUserString) => JSON.parse(localStorageUserString) as User
    )
  );

export const changeUserInLocalStorate = (user: O.Option<User>) =>
  O.tap(user, (user) => {
    user
      ? localStorageSetItem("user")(JSON.stringify(user))
      : localStorageDeleteItem("user");
  });

export const createUser = (name: string) =>
  name === "" ? null : User({ name });
