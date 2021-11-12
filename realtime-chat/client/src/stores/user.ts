import { pipe, tap } from 'ramda';
import { writable } from 'svelte/store';

import type { User } from '../domain/user';
type UserStore = User;

const userStore = () => {
	const { subscribe, set } = writable<UserStore>({ isLoggedIn: false, name: null });
	return {
		subscribe,
		authorize: pipe(tap((name: string) => set({ isLoggedIn: true, name })))
	};
};

export const user = userStore();
