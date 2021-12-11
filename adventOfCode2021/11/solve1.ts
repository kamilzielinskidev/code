import { readFileSync } from "fs";
import { matrix } from "mathjs";
import { pipe } from "ramda";

import { map, split } from "../utils";

type JellyState = { v: number; isBlinked: boolean };

const readData = pipe(
  (x) => readFileSync(`${__dirname}/${x}`, { encoding: "utf-8" }),
  split("\n"),
  map(split("")),
  map(map(parseFloat)),
  matrix
);

const blinkJellies = (
  jellies: JellyState[][],
  row: number,
  col: number
): number => {
  const isPresent = !!jellies[row]?.[col];
  if (!isPresent) return 0;
  if (jellies[row][col].isBlinked) return 0;
  if (jellies[row][col].v <= 9 && !jellies[row][col].isBlinked) {
    jellies[row][col].v += 1;
  }
  if (jellies[row][col].v > 9 && !jellies[row][col].isBlinked) {
    jellies[row][col].isBlinked = true;
    jellies[row][col].v = 0;
    return (
      1 +
      blinkJellies(jellies, row - 1, col) +
      blinkJellies(jellies, row - 1, col + 1) +
      blinkJellies(jellies, row, col + 1) +
      blinkJellies(jellies, row + 1, col + 1) +
      blinkJellies(jellies, row + 1, col) +
      blinkJellies(jellies, row + 1, col - 1) +
      blinkJellies(jellies, row, col - 1) +
      blinkJellies(jellies, row - 1, col - 1)
    );
  }
  return 0;
};

const rawJellies = readData("./data");

const jellies = (rawJellies.toJSON().data as number[][]).map((row) =>
  row.map((v) => <const>{ v, isBlinked: false })
);

const progress = (
  jellies: JellyState[][],
  step: number,
  maxStep: number,
  blinks = 0
): number => {
  if (step > maxStep) return blinks;
  jellies.forEach((row) =>
    row.forEach((v) => {
      v.v += 1;
      v.isBlinked = false;
    })
  );

  blinks =
    blinks +
    jellies
      .map((row, rowIdx) =>
        row.map((jelly, colIdx) =>
          jelly.v === 10 ? blinkJellies(jellies, rowIdx, colIdx) : 0
        )
      )
      .flat()
      .reduce((acc, next) => acc + next, 0);

  return progress(jellies, step + 1, maxStep, blinks);
};

const result = progress(jellies, 0, 99);

console.log(result);
