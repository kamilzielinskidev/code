import { readFileSync } from "fs";

const readData = (path: string) =>
  readFileSync(`${__dirname}/${path}`, { encoding: "utf-8" }).toString();

console.log(
  readData("./data")
    .split("\n")
    .map(parseFloat)
    .reduce(
      (acc, next, index, arr) =>
        index === 0 ? 0 : next > arr[index - 1] ? acc + 1 : acc,
      0
    )
);
