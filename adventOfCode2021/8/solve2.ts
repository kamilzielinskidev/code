import { readFileSync } from "fs";
import { median, pipe, trim, xor } from "ramda";

import { compareStrings, map, split } from "../utils";
import { uglyDigitsSolver } from "./uglyDigitsSolver";

const readData = pipe(
  (x) => readFileSync(`${__dirname}/${x}`, { encoding: "utf-8" }),
  split("\n"),
  map((x) => split("|")(x).map(trim).map(split(" ")))
);

const data = readData("./data");

const getDigitValue = (digitsMap: Record<string, number>) => (digit: string) =>
  Object.entries(digitsMap).find(([digitCode]) =>
    compareStrings(digit)(digitCode)
  )![1];

const digits = readData("./data");

const result = digits
  .map(([signals, output]) =>
    parseInt(output.map(getDigitValue(uglyDigitsSolver(signals))).join(""))
  )
  .reduce((acc, next) => acc + next, 0);

console.log(result);
