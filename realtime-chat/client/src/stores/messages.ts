import { andThen, otherwise, pipe, tap } from 'ramda';
import { writable } from 'svelte/store';

import { getMessages } from '../api/message/message';

import type { Message } from '../domain/message';

type LoadingState = { state: 'LOADING' };
type ErrorState = { state: 'ERROR'; message: string };
type OkState<T> = { state: 'OK'; value: T };

type MessagesStore = LoadingState | ErrorState | OkState<Message[]>;

const messagesStore = () => {
	const { subscribe, set } = writable<MessagesStore>({ state: 'LOADING' });
	return {
		subscribe,
		fetch: pipe(
			tap(() => set({ state: 'LOADING' })),
			getMessages,
			andThen((value) => set({ state: 'OK', value })),
			otherwise(({ message }) => set({ state: 'ERROR', message }))
		)
	};
};

export const messages = messagesStore();
