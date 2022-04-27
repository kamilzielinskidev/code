import { User } from '../../common/domain';

const user = (a: User) => a;

export const of = user;

export const ofName = (name: string) => user({ name });

export const map = (a: User) => (fn: (a: User) => User) => of(fn(a));

export const chain =
  (a: User) =>
  <A>(fn: (a: User) => A) =>
    fn(a);

export const get =
  <A extends keyof User>(prop: A) =>
  (a: User) =>
    a[prop];
