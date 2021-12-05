import { readFileSync } from "fs";
import { clone, Matrix, max, zeros } from "mathjs";
import { applySpec, pipe } from "ramda";

import { filter, map, split } from "../utils";

type Path = { from: [number, number]; to: [number, number] };

const readData = (path: string) =>
  readFileSync(`${__dirname}/${path}`, { encoding: "utf-8" })
    .toString()
    .split("\n");

const getPaths = pipe(
  map(split(" -> ")),
  map(
    applySpec<Path>({
      from: pipe((x) => x[0], split(","), map(parseFloat)),
      to: pipe((x) => x[1], split(","), map(parseFloat)),
    })
  ),
  filter(({ from, to }) => from[0] === to[0] || from[1] === to[1])
);

const getMatrixSize = (paths: Path[]): [number, number] => [
  paths.reduce((acc, path) => {
    const highestLocal = max(path.from[0], path.to[0]);
    return highestLocal > acc ? highestLocal : acc;
  }, 0) + 1,
  paths.reduce((acc, path) => {
    const highestLocal = max(path.from[1], path.to[1]);
    return highestLocal > acc ? highestLocal : acc;
  }, 0) + 1,
];

const getPathPoints = (
  start: Path["from"],
  end: Path["to"],
  path: [number, number][]
): [number, number][] => {
  if (start[0] < end[0]) {
    return getPathPoints([start[0] + 1, start[1]], end, [
      ...path,
      [start[0] + 1, start[1]],
    ]);
  }
  if (start[0] > end[0]) {
    return getPathPoints([start[0] - 1, start[1]], end, [
      ...path,
      [start[0] - 1, start[1]],
    ]);
  }
  if (start[1] < end[1]) {
    return getPathPoints([start[0], start[1] + 1], end, [
      ...path,
      [start[0], start[1] + 1],
    ]);
  }
  if (start[1] > end[1]) {
    return getPathPoints([start[0], start[1] - 1], end, [
      ...path,
      [start[0], start[1] - 1],
    ]);
  }
  return path;
};

const check = (paths: Path[], matrix: number[][], deep = 0): number[][] => {
  const matrixCopy = (deep = 0 ? clone(matrix) : matrix);
  if (paths.length === 0) return matrix;
  const path = paths[0];
  const pathPoints = getPathPoints(path.from, path.to, [path.from]);

  pathPoints.forEach((pathPoint) => {
    matrixCopy[pathPoint[0]][pathPoint[1]] += 1;
  });
  return check(paths.slice(1), matrixCopy, deep + 1);
};

const paths = getPaths(readData("./data"));

const matrix = zeros(getMatrixSize(paths)) as number[][];

const finalMatrix = check(paths, matrix);

const getAmountOf2Plus = () =>
  finalMatrix.reduce(
    (acc, row) =>
      acc + row.reduce((rowAcc, v) => (v >= 2 ? rowAcc + 1 : rowAcc), 0),
    0
  );

console.log(getAmountOf2Plus());
