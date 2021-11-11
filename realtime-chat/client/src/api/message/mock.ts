import faker from 'faker';
import { gte, ifElse } from 'ramda';

import type { AllMessagesRespone, Message } from './model';

const mockMessages: AllMessagesRespone = new Array<Message>(10).fill(null).map(() => ({
	createdAt: faker.date.recent(),
	message: faker.hacker.phrase(),
	by: { name: faker.name.firstName() }
}));

export const getMockMessages = (): Promise<Message[]> =>
	new Promise<Message[]>((res, rej) =>
		ifElse(
			gte(0.9),
			() => {
				setTimeout(() => {
					res(mockMessages);
				}, 1000);
			},
			() => {
				setTimeout(() => {
					rej({ message: 'qwe' });
				}, 2000);
			}
		)(Math.random())
	);
