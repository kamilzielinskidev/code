import { O } from "@mobily/ts-belt";
import { User } from "../../domain/user";

export type State = {
  user: O.Option<User>;
  isLoggedIn: boolean;
};

export type Actions = {
  setUser: (user: O.Option<User>) => void;
};

export const initState = <State>{ user: O.None };

export const actions = (setter: (state: State) => void, state: State) =>
  <Actions>{ setUser: (user) => setter({ ...state, user }) };
