import { readFileSync } from "fs";

import * as R from "ramda";

const split = (a: string) => (b: string) => b.split(a);

const map =
  <A, B>(fn: (a: A) => B) =>
  (a: A[]) =>
    a.map(fn);

const filter =
  <A>(fn: (a: A) => boolean) =>
  (a: A[]) =>
    a.filter(fn);

const groupEvery =
  <T>(a: number) =>
  (arr: T[]) =>
    arr.reduce((acc, next, index) => {
      const resultIndex = Math.floor(index / a);

      return !acc[resultIndex]
        ? R.append([next], acc)
        : R.over(R.lensIndex<T[]>(resultIndex), R.append(next), acc);
    }, [] as T[][]);

const parseBingoValues = R.pipe(
  split(" "),
  filter((v) => !!v),
  map(parseFloat),
  map((v) => ({ v, isChecked: false }))
);

const readData = (path: string) =>
  readFileSync(`${__dirname}/${path}`, { encoding: "utf-8" }).toString();

const [shootsRaw, ...bingoRaw] = readData("./data").split("\n");

const shoots = shootsRaw.split(",").map(parseFloat);

const bingo = R.pipe(
  filter((v) => !!v),
  groupEvery<string>(5),
  map(map(parseBingoValues))
)(bingoRaw);

type BingoValue = { v: number; isChecked: boolean };

const checkRows = (matrix: BingoValue[][]) =>
  matrix.find((row) => row.every((v) => v.isChecked === true)) ? matrix : false;

const checkColumns = (matrix: BingoValue[][]) =>
  checkRows(R.transpose(matrix)) ? matrix : false;

const check = (bingo: BingoValue[][][], value: number) => {
  const copy = R.clone(bingo);
  copy.forEach((b) =>
    b.forEach((r) =>
      r.find((v) => {
        if (v.v === value) v.isChecked = true;
      })
    )
  );
  return copy;
};

const bingTable = (bingo: BingoValue[][][], scores: number[]) =>
  scores.reduce(
    (acc, score) => {
      if (acc.isBinged) return acc;
      const checked = check(acc.bingoTable, score);
      const bingedBingo = checked.find(checkRows) || checked.find(checkColumns);

      if (bingedBingo) {
        return { isBinged: true, bingoTable: [bingedBingo], shoot: score };
      }
      return { isBinged: false, bingoTable: checked, shoot: score };
    },
    { isBinged: false, bingoTable: bingo, shoot: 0 }
  );

const bingedTable = bingTable(bingo, shoots);

const notChecked = bingedTable.bingoTable
  .flat(3)
  .filter((v) => v.isChecked === false);

const notCheckedSum = notChecked.reduce((acc, { v }) => acc + v, 0);

const shoot = bingedTable.shoot;

console.log(notCheckedSum * shoot);
