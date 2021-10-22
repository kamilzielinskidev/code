import {
  allPass,
  always,
  filter,
  flip,
  gte,
  identity,
  ifElse,
  isNil,
  lte,
  map,
  pipe,
  prop,
  propSatisfies,
  reverse,
  toUpper,
  where,
} from "ramda";
import { isTrue } from "ramda-adjunct";

const getFirstName = prop("firstName");

export const upperAndReverseFirstName = pipe(getFirstName, reverse, toUpper);

export const upperAndReverseFirstNameMultiple = map(upperAndReverseFirstName);

const positiveCareerForPerson = (name: String) =>
  `${name} may enjoy a tech career!`;
const negativeCareerForPerson = (name: String) =>
  `${name} wouldn't enjoy a tech career.`;

const lovesTechAndWorkHard = where({ lovesTech: isTrue, worksHard: isTrue });

const getName = prop("name");

export const shouldCode = ifElse(
  lovesTechAndWorkHard,
  pipe(getName, positiveCareerForPerson),
  pipe(getName, negativeCareerForPerson)
);

const flippedGte = flip(gte);
const flippedLte = flip(lte);

const isBetween18And25Included = allPass([flippedGte(18), flippedLte(25)]);

export const keepYoungAdults = filter(
  propSatisfies(isBetween18And25Included, "age")
);

export const defaultTo = (defaultValue: String) =>
  ifElse(isNil, always(defaultValue), identity);
