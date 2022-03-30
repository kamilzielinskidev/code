import { O, pipe } from '@mobily/ts-belt';

import { User } from '../domain/User';

export const fromName = (name: string) => User({ name });
export const map = (mapFn: (user: User) => User) => (user: User) => User(mapFn(user));
export const get =
    <A extends keyof User>(prop: A) =>
    (user: User) =>
        user[prop];
export const fromLocalStorage = () =>
    pipe(
        localStorage.getItem("user"),
        O.fromNullable,
        O.map((user) => JSON.parse(user) as User)
    );
export const toLocalStorage = (user: User) => localStorage.setItem("user", JSON.stringify(user));
export const clearLocalStorage = () => localStorage.removeItem("user");
