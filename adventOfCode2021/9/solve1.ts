import { readFileSync } from "fs";
import { matrix } from "mathjs";
import { median, pipe, trim } from "ramda";

import { map, split } from "../utils";

const readData = pipe(
  (x) => readFileSync(`${__dirname}/${x}`, { encoding: "utf-8" }),
  split("\n"),
  map(split("")),
  map(map(parseFloat))
);

const getDataMatrix = () => matrix(readData("./data"));

const [columnSize, rowSize] = getDataMatrix().size();
const [maxColumnSize, maxRowSize] = [columnSize - 1, rowSize - 1];

const dataMatrix = getDataMatrix()
  // @ts-ignore
  .map((v, [row, column], matrix) => {
    const t = row === 0 ? 10 : matrix.get([row - 1, column]);
    const r = column === maxRowSize ? 10 : matrix.get([row, column + 1]);
    const b = row === maxColumnSize ? 10 : matrix.get([row + 1, column]);
    const l = column === 0 ? 10 : matrix.get([row, column - 1]);
    const isLowest = v < t && v < r && v < b && v < l;
    return {
      v,
      isLowest,
    };
  })
  .toJSON().data as { v: number; isLowest: boolean }[][];

const result = dataMatrix
  .flat()
  .reduce((acc, { v, isLowest }) => (isLowest ? acc + (v + 1) : acc), 0);

console.log(result);
