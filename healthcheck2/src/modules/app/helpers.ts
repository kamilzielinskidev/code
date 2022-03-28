import { O, pipe } from '@mobily/ts-belt';

type User = { name: string };

export const initialUserLoad =
  (
    readUserFromBrowserFn: () => O.Option<User>,
    saveToAppStateFn: (user: User) => void
  ) =>
  () => {
    pipe(readUserFromBrowserFn(), O.tap(saveToAppStateFn));
  };
