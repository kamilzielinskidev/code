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

const areEqualAmountOfOccurances = (obj: Record<string, number>) =>
  Object.values(obj).every((v) => v === Object.values(obj)[0]);

const pickKeyWithHighestValue = (obj: Record<string, number>) =>
  Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];

const pickKeyWithLowestValue = (obj: Record<string, number>) =>
  Object.entries(obj).sort((a, b) => a[1] - b[1])[0][0];

const readData = (path: string) =>
  readFileSync(`${__dirname}/${path}`, { encoding: "utf-8" }).toString();

const dataMatrix = readData("./data")
  .split("\n")
  .map((row) => row.split("").map(parseFloat));

// @ts-ignore
const filterValues = (
  matrix: number[][],
  column: number,
  isHighest: boolean
) => {
  if (matrix.length === 1) return parseInt(matrix.flat().join(""), 2);
  const occurances = countOccurances(transpose(matrix)[column]);
  const mostOfValuesValue = parseInt(pickKeyWithHighestValue(occurances));
  const leastOfValuesValue = parseInt(pickKeyWithLowestValue(occurances));

  if (areEqualAmountOfOccurances(occurances)) {
    return filterValues(
      matrix.filter((row) =>
        isHighest ? row[column] === 1 : row[column] === 0
      ),
      column + 1,
      isHighest
    );
  }
  return filterValues(
    matrix.filter((row) =>
      isHighest
        ? row[column] === mostOfValuesValue
        : row[column] === leastOfValuesValue
    ),
    column + 1,
    isHighest
  );
};

console.log(
  filterValues(dataMatrix, 0, true) * filterValues(dataMatrix, 0, false)
);
