import create from "zustand";

import { O } from "@mobily/ts-belt";

import { User } from "../domain/user";

type AuthState = {
  user: O.Option<User>;
  setUser: (user: O.Option<User>) => void;
};

export const useAuthState = create<AuthState>((set) => ({
  user: O.None,
  setUser: (user) => set({ user }),
}));
