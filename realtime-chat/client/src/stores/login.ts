import { goto } from '$app/navigation';
import { allPass, gte, ifElse, lte, pipe, propSatisfies, tap } from 'ramda';
import { writable } from 'svelte/store';

import { user } from './user';

import type { ErrorState, LoadingState, PreState } from '../utils';
import { messagesService } from '../api/messagesService/messagesService';
type LoginStore = PreState | LoadingState | ErrorState;

// TODO: handle specific validation messages
const nameValidations = [propSatisfies(lte(6), 'length'), propSatisfies(gte(12), 'length')];

const loginStore = () => {
	const { subscribe, set } = writable<LoginStore>({ state: 'PRE' });
	return {
		subscribe,
		login: pipe(
			tap(() => set({ state: 'LOADING' })),
			ifElse(
				allPass(nameValidations),
				pipe(
					// TODO: move navigation logic and service connection to svelte component
					tap(messagesService.connect),
					tap(user.authorize),
					tap(() => goto('/'))
				),
				tap(() => set({ state: 'ERROR', message: 'name incorrect' }))
			)
		)
	};
};

export const login = loginStore();
