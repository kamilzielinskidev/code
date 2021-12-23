import { StringCallback } from "../types";
import { Route } from "./models";

// TODO: test
export const goTo =
  (routingPushMethod: StringCallback) => (route: Route) => () => {
    routingPushMethod(route);
  };
