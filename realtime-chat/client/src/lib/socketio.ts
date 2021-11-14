import { io, Socket } from 'socket.io-client';

export const socketIoConnection = () => {
	let connection: Socket = null;
	return {
		connect: ({ url, query }: { url: string; query: Record<string, any> }) =>
			(connection = io(url, { query })),

		emitEvent: ({ type, data }: { type: string; data?: string }) => connection.emit(type, data),

		onEvent: <T>({ type, callback }: { type: string; callback: (a: T) => void }) =>
			connection.on(type, callback)
	};
};
