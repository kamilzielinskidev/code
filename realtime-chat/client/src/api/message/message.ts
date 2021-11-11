import { getMockMessages } from './mock';

import type { AllMessagesRespone } from './model';

export const getMessages = (): Promise<AllMessagesRespone> => getMockMessages();
