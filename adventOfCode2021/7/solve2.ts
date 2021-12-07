import { readFileSync } from "fs";
import { pipe } from "ramda";

import { map, split } from "../utils";

const readData = pipe(
  (x) => readFileSync(`${__dirname}/${x}`, { encoding: "utf-8" }),
  split(","),
  map(parseFloat)
);

const sumOfStepsBy1 = (value: number, sum: number): number => {
  if (value === 0) return sum;
  return sumOfStepsBy1(value - 1, sum + value);
};

const positions = readData("./data");

const getDistanceFromPosition = (position: number, positions: number[]) =>
  positions.reduce(
    (acc, next) => acc + sumOfStepsBy1(Math.abs(next - position), 0),
    0
  );

const getOptimalPosition = (
  positions: number[],
  value: number,
  maxValue: number,
  best: number
): number => {
  if (value === maxValue) return best;
  const distance = getDistanceFromPosition(value, positions);
  return getOptimalPosition(
    positions,
    value + 1,
    maxValue,
    distance < best ? distance : best
  );
};

console.log(getOptimalPosition(positions, 0, positions.length - 1, 100000000));
