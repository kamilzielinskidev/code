import create from 'zustand';

import { O } from '@mobily/ts-belt';

import { User } from '../../domain/User';

type AuthenticationState = {
    user: O.Option<User>;
    setUser: (user: O.Option<User>) => void;
};

export const useAuthenticationState = create<AuthenticationState>((set) => ({
    user: O.None,
    setUser: (user) => set({ user }),
}));
