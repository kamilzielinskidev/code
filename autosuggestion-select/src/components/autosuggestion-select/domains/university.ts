import { D, F } from "@mobily/ts-belt";

// FIXME: this can be splitted
export type University = Readonly<{
  name: string;
  isPicked: boolean;
}>;

export type Universities = ReadonlyArray<University>;

// TODO: test
export const createUniversity = (name: string) =>
  <University>{ name, isPicked: false };

export const pickUniversity = (uni: University) =>
  D.updateUnsafe(uni, "isPicked", F.truthy);

export const unpickUniversity = (uni: University) =>
  D.updateUnsafe(uni, "isPicked", F.falsy);

export const compareUniversities = (uni1: University) => (uni2: University) =>
  uni1.name === uni2.name;
