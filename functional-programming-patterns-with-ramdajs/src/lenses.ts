import { lensPath, map, over, pipe, toUpper, view } from "ramda";

const flavorLense = lensPath([
  "interests",
  "foods",
  "sweets",
  "iceCream",
  "favoriteFlavor",
]);

export const getFavoriteFlavors = map(view(flavorLense));

const makeFlavorGreat = (val: string) => `${val} IS A GREAT FLAVOR`;

export const favoriteFlavorMix = pipe(
  map(over(flavorLense, pipe(toUpper, makeFlavorGreat))),
  getFavoriteFlavors
);
