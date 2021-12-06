import { readFileSync } from "fs";

import { applySpec, clone, countBy, pipe, prop } from "ramda";
import { map, split } from "../utils";

const readData = pipe(
  (x) => readFileSync(`${__dirname}/${x}`, { encoding: "utf-8" }),
  split(","),
  map(parseFloat),
  countBy(Math.floor),
  applySpec<Record<number, number>>({
    0: pipe(prop("0"), (x) => x || 0),
    1: pipe(prop("1"), (x) => x || 0),
    2: pipe(prop("2"), (x) => x || 0),
    3: pipe(prop("3"), (x) => x || 0),
    4: pipe(prop("4"), (x) => x || 0),
    5: pipe(prop("5"), (x) => x || 0),
    6: pipe(prop("6"), (x) => x || 0),
    7: pipe(prop("7"), (x) => x || 0),
    8: pipe(prop("8"), (x) => x || 0),
  })
);

const simulateFishesSpawn = (
  fishes: Record<string, number>,
  day: number,
  lastDay: number
): Record<string, number> => {
  if (day === lastDay) return fishes;
  const fishesCopy = day === 0 ? clone(fishes) : fishes;

  const fishesToSpawn = fishesCopy[0];

  fishesCopy[0] = fishesCopy[1];
  fishesCopy[1] = fishesCopy[2];
  fishesCopy[2] = fishesCopy[3];
  fishesCopy[3] = fishesCopy[4];
  fishesCopy[4] = fishesCopy[5];
  fishesCopy[5] = fishesCopy[6];
  fishesCopy[6] = fishesToSpawn + fishesCopy[7];
  fishesCopy[7] = fishesCopy[8];
  fishesCopy[8] = fishesToSpawn;

  return simulateFishesSpawn(fishesCopy, day + 1, lastDay);
};

const getFishesAfterDays = () =>
  simulateFishesSpawn(readData("./data"), 0, 256);

const amountOfFishes = Object.values(getFishesAfterDays()).reduce(
  (acc, next) => acc + next,
  0
);

console.log(amountOfFishes);
