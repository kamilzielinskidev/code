import create from 'zustand';

import { User } from '../../../common/domain';

interface AuthState {
  user: User | null;
  setUser: (u: User | null) => void;
}

export const authState = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
