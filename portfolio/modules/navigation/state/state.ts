import { spawn } from "threads";
import { NavigationState } from "./webworker";

export const navigationState = spawn<NavigationState>(
  new Worker(new URL("./webworker.ts", import.meta.url))
);
