import create from 'zustand';

import { O } from '@mobily/ts-belt';

import { AuthenticationUser } from '../../domain';

type AuthenticationState = {
  user: AuthenticationUser;
  setUser: (user: AuthenticationUser) => void;
};

export const useAuthenticationState = create<AuthenticationState>((set) => ({
  user: O.None,
  setUser: (user) => set({ user }),
}));
