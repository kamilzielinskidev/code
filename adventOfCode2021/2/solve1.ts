import { readFileSync } from "fs";

const readData = (path: string) =>
  readFileSync(`${__dirname}/${path}`, { encoding: "utf-8" }).toString();

const { horizontal, vertical } = readData("./data")
  .split("\n")
  .map<[string, number]>((course) => {
    const [action, vertical] = course.split(" ");
    return [action, parseFloat(vertical)];
  })
  .reduce(
    (acc, next) =>
      next[0] === "forward"
        ? { ...acc, horizontal: acc.horizontal + next[1] }
        : next[0] === "up"
        ? { ...acc, vertical: acc.vertical - next[1] }
        : { ...acc, vertical: acc.vertical + next[1] },
    { horizontal: 0, vertical: 0 }
  );

console.log(horizontal * vertical);
