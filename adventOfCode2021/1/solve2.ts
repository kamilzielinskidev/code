import { readFileSync } from "fs";
import { sum } from "ramda";

const readData = (path: string) =>
  readFileSync(`${__dirname}/${path}`, { encoding: "utf-8" }).toString();

console.log(
  readData("./data")
    .split("\n")
    .map(parseFloat)
    .reduce(
      (acc, next, index, arr) =>
        index === 0 || index === 1 || index === 2
          ? 0
          : sum([arr[index - 2], arr[index - 1], next]) >
            sum([arr[index - 3], arr[index - 2], arr[index - 1]])
          ? acc + 1
          : acc,
      0
    )
);
