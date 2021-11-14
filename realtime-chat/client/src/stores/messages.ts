import { pipe, tap } from 'ramda';
import { writable } from 'svelte/store';

import { messagesService } from '../api/messagesService/messagesService';

import type { Message } from '../domain/message';

const messagesStore = () => {
	const { subscribe, update } = writable<Message[]>([]);

	return {
		subscribe,
		listenToMessages: pipe(
			// TODO: move service connect logic from store to svelte component
			tap(() =>
				messagesService.onMessage((message) => update((messages) => [...messages, message]))
			)
		),
		sendMessage: messagesService.sendMessage
	};
};

export const messages = messagesStore();
