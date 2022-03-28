import { O } from '@mobily/ts-belt';

import { User } from '../../domain/User';

export type AuthenticationUser = O.Option<User>;

export type LocalStorageUser = User;
