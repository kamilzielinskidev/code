import { readFileSync } from "fs";
import { e, matrix } from "mathjs";
import { median, pipe, trim } from "ramda";

import { map, split } from "../utils";

const readData = pipe(
  (x) => readFileSync(`${__dirname}/${x}`, { encoding: "utf-8" }),
  split("\n"),
  map(split("")),
  map(map((x) => x as Start | End))
);

const getData = () => readData("./data");

type Start = "(" | "[" | "{" | "<";
type End = ")" | "]" | "}" | ">";

const starts: Start[] = ["(", "[", "{", "<"];
const ends: End[] = [")", "]", "}", ">"];

const closingToPoint = <const>{
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

const mapStartToClose = (start: Start) =>
  start === "(" ? ")" : start === "[" ? "]" : start === "{" ? "}" : ">";

const mapCloseToStart = (end: End) =>
  end === ")" ? "(" : end === "]" ? "[" : end === "}" ? "{" : "<";

const checkIfBelongsToStart = (c: string): c is Start =>
  starts.includes(c as Start);

const checkIfBelongsToEnd = (c: string): c is End => ends.includes(c as End);

const getLineFirstError = (line: (Start | End)[]) =>
  line.reduce(
    (acc, next) => {
      if (acc.error) return acc;

      if (checkIfBelongsToStart(next))
        return { ...acc, vector: [next, ...acc.vector] };

      if (acc.vector[0] === mapCloseToStart(next))
        return { ...acc, vector: acc.vector.slice(1) };

      return { error: next, vector: [] };
    },
    { error: "" as End, vector: [] as string[] }
  );

const solution = getData()
  .map(getLineFirstError)
  .map(({ error }) => error)
  .filter((v) => !!v)
  .map((v) => closingToPoint[v])
  .reduce((acc, next) => acc + next, 0);

console.log(solution);
