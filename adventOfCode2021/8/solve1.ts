import { readFileSync } from "fs";
import { median, pipe, trim } from "ramda";

import { map, split } from "../utils";

const readData = pipe(
  (x) => readFileSync(`${__dirname}/${x}`, { encoding: "utf-8" }),
  split("\n"),
  map(split("|")),
  map(([_, decoded]) => decoded),
  map(trim),
  map(split(" "))
);

const digits = readData("./data");

const checkIfFit = (digit: string) =>
  digit.length === 2 ||
  digit.length === 3 ||
  digit.length === 4 ||
  digit.length === 7;

const result = digits
  .flat()
  .reduce((acc, next) => (checkIfFit(next) ? acc + 1 : acc), 0);

console.log(result);
