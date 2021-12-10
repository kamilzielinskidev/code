import { readFileSync } from "fs";
import { Matrix, matrix } from "mathjs";
import { pipe } from "ramda";

import { map, split } from "../utils";

const readData = pipe(
  (x) => readFileSync(`${__dirname}/${x}`, { encoding: "utf-8" }),
  split("\n"),
  map(split("")),
  map(map(parseFloat)),
  matrix
);

const getMatrixIndexSizes = (matrix: Matrix) => [
  matrix.size()[0],
  matrix.size()[1],
];

const getRawMatrixData = <T>(matrix: Matrix) => matrix.toJSON().data as T[][];

const getBasin = (matrix: boolean[][], row: number, column: number): number => {
  const value = matrix[row]?.[column];
  if (!value) return 0;
  const hasNoNeighbours =
    !matrix[row - 1]?.[column] &&
    !matrix[row + 1]?.[column] &&
    !matrix[row]?.[column - 1] &&
    !matrix[row]?.[column + 1];
  matrix[row][column] = false;
  if (hasNoNeighbours) return 1;
  return (
    1 +
    getBasin(matrix, row + 1, column) +
    getBasin(matrix, row - 1, column) +
    getBasin(matrix, row, column + 1) +
    getBasin(matrix, row, column - 1)
  );
};

const dataMatrix = readData("./data").map((v) => v !== 9);

const rawMatrixData = getRawMatrixData<boolean>(dataMatrix);

const solution = rawMatrixData
  .map((row, rowIndex) =>
    row.map((v, columnIndex) => getBasin(rawMatrixData, rowIndex, columnIndex))
  )
  .flat()
  .reduce((acc, next) => (next ? [...acc, next] : acc), [] as number[])
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, next) => (acc ? acc * next : next), 0);

console.log(solution);
