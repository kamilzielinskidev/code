import { Room } from './do';

const room = (a: Room) => a;

export const of = room;

export const map = (a: Room) => (fn: (a: Room) => Room) => of(fn(a));

export const chain =
  (a: Room) =>
  <A>(fn: (a: Room) => A) =>
    fn(a);

export const get =
  <A extends keyof Room>(prop: A) =>
  (a: Room) =>
    a[prop];
