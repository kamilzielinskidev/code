import { readFileSync } from "fs";
import { transpose } from "mathjs";

const countOccurances = <T>(arr: T[]) =>
  arr.reduce(
    (acc, next) =>
      next in acc
        ? { ...acc, [`${next}`]: acc[`${next}`] + 1 }
        : { ...acc, [`${next}`]: 1 },
    {} as Record<string, number>
  );

const pickKeyWithHighestValue = (obj: Record<string, number>) =>
  Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];

const pickKeyWithLowestValue = (obj: Record<string, number>) =>
  Object.entries(obj).sort((a, b) => a[1] - b[1])[0][0];

const readData = (path: string) =>
  readFileSync(`${__dirname}/${path}`, { encoding: "utf-8" }).toString();

const dataMatrix = readData("./data")
  .split("\n")
  .map((row) => row.split("").map(parseFloat));

const transposedMatrix = transpose(dataMatrix);

const highest = parseInt(
  transposedMatrix.map(countOccurances).map(pickKeyWithHighestValue).join(""),
  2
);

const lowest = parseInt(
  transposedMatrix.map(countOccurances).map(pickKeyWithLowestValue).join(""),
  2
);

console.log(highest * lowest);
