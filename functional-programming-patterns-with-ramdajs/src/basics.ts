import {
  allPass,
  always,
  cond,
  descend,
  filter,
  flip,
  gte,
  head,
  identity,
  ifElse,
  isNil,
  lte,
  map,
  median,
  pipe,
  pluck,
  prop,
  propSatisfies,
  reverse,
  sort,
  sortBy,
  sum,
  T,
  toUpper,
  where,
} from "ramda";
import { isTrue, sliceTo } from "ramda-adjunct";

const getFirstName = prop("firstName");

//@ts-ignore
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

const getPrice = prop("price");

const prependWithDollar = (v: number | string) => `$${v}`;

const toFixed = (fraction: number) => (v: number) =>
  parseFloat(v.toFixed(fraction));

export const getTotalPrice = pipe(
  //@ts-ignore
  pluck("price"),
  sum,
  toFixed(2),
  prependWithDollar
);

//@ts-ignore
export const getCheapestItem = pipe(sortBy(getPrice), head, getName);

//@ts-ignore
const isPriceBelow12 = pipe(getPrice, flippedLte(12));

const getRating = prop("rating");

const ratingsDescending = descend(getRating);

export const getTop3MealsFor = pipe(
  // @ts-ignore
  filter(isPriceBelow12),
  //@ts-ignore
  sort(ratingsDescending),
  sliceTo(3)
);

const getSalary = prop("salary");

const isAbove100k = flippedGte(100000);

//@ts-ignore
const isSalaryAbove100k = pipe(getSalary, isAbove100k);

export const getMedianPaycheck = pipe(
  filter(isSalaryAbove100k),
  //@ts-ignore
  pluck("salary"),
  median,
  prependWithDollar
);

const isAbove800 = flippedGte(800);

const isAbove700 = flippedGte(700);

const isAbove650 = flippedGte(650);

const scoreExcellent = (score: number) => `${score} is excellent!`;

const scoreGood = (score: number) => `${score} is good`;

const scoreFair = (score: number) => `${score} is fair`;

const scorePoor = (score: number) => `${score} is poor`;

const scoreRatingCond = cond([
  [isAbove800, scoreExcellent],
  [isAbove700, scoreGood],
  [isAbove650, scoreFair],
  [T, scorePoor],
]);

export const getCreditScoreRatings = map(scoreRatingCond);
