import { O } from "@mobily/ts-belt";

import { User } from "./domain/user";

export const mapTextToUser = (text: string) =>
  text === "" ? O.None : O.Some(User({ name: text }));

export const mapUserToText = (user: O.Option<User>) =>
  O.mapWithDefault(user, "", (user) => user.name);
