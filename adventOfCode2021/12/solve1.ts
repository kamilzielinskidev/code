import { readFileSync } from "fs";
import { pipe } from "ramda";
import { map, split } from "../utils";

type Connection = [string, string];

const readData = pipe(
  (x: string) => readFileSync(`${__dirname}/${x}`, { encoding: "utf-8" }),
  split<string[]>("\n")
);

const getConnections = pipe(readData, map(split<Connection>("-")));

const getConnectionsWithSwitched = (connections: Connection[]) => {
  const switchedConnections = connections.map(([first, second]) => [
    second,
    first,
  ]);
  return [...connections, ...switchedConnections] as Connection[];
};

const getNodes = (connections: Connection[]) =>
  connections.reduce((acc, next) => {
    const [from, to] = next;
    if (from === "end") return acc;
    if (to === "start") return acc;
    return !(from in acc)
      ? { ...acc, [from]: [to] }
      : { ...acc, [from]: [...acc[from], to] };
  }, {} as Record<string, string[]>);

const getAvailableConnections = pipe(
  getConnections,
  getConnectionsWithSwitched,
  getNodes
);

const checkIfCanGoToNode = (currentPath: string[]) => (node: string) =>
  !currentPath.includes(node) || node === node.toUpperCase();

const goToCave = (
  connections: Record<string, string[]>,
  currentPosition: string,
  currentPath = [] as string[]
): string[] | string[][] => {
  if (currentPosition === "end") return [...currentPath, "end"];
  if (!checkIfCanGoToNode(currentPath)(currentPosition)) return [];

  // @ts-ignore
  return connections[currentPosition].map((cave) =>
    goToCave(connections, cave, [...currentPath, currentPosition])
  );
};

const getResult = () => goToCave(getAvailableConnections("./data"), "start");

const results = JSON.stringify(getResult()).match(/start/g)!.length;

// console.log(results);
