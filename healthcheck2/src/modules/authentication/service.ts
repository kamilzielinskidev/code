import { O, pipe } from '@mobily/ts-belt';

import { AuthenticationUser } from './domain';

export const initialUserLoad =
  (
    readUserFromBrowserFn: () => AuthenticationUser,
    saveToAppStateFn: (user: AuthenticationUser) => void
  ) =>
  () => {
    pipe(readUserFromBrowserFn(), O.tap(saveToAppStateFn));
  };
