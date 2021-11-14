import { pipe } from 'ramda';

import { socketIoConnection } from '../../lib/socketio';

import type { Message } from '../../domain/message';
import type { Message as ReceivedMessage } from './model';

const MESSAGE_SERVICE_WS_URL = import.meta.env['VITE_MESSAGE_SERVICE_WS_URL'] as string;

export const messagesService = (() => {
	const connection = socketIoConnection();
	return {
		connect: (by: string) => {
			connection.connect({ url: MESSAGE_SERVICE_WS_URL, query: { by } });
		},
		sendMessage: (message: string) => {
			connection.emitEvent({ type: 'SendMessage', data: message });
		},
		onMessage: (callback: (a: Message) => void) => {
			connection.onEvent({
				type: 'ReceivedMessage',
				callback: pipe(
					// TODO: redo with ramda
					({ message, createdAt, by }: ReceivedMessage) =>
						({
							message,
							createdAt: new Date(createdAt),
							by: { name: by }
						} as Message),
					callback
				)
			});
		}
	};
})();
