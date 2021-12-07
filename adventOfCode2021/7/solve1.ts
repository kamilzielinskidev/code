import { readFileSync } from "fs";
import { median, pipe } from "ramda";

import { map, split } from "../utils";

const readData = pipe(
  (x) => readFileSync(`${__dirname}/${x}`, { encoding: "utf-8" }),
  split(","),
  map(parseFloat)
);

const positions = readData("./data");

const positionsMedian = median(positions);

const distanceFromMedian = () =>
  positions.reduce((acc, next) => acc + Math.abs(next - positionsMedian), 0);

console.log(distanceFromMedian());
