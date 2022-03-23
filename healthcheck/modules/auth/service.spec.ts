import { O } from "@mobily/ts-belt";

import { User } from "./domain/user";
import { mapTextToUser } from "./service";

it("should map empty string to optional none", () => {
  expect(mapTextToUser("")).toEqual(O.None);
});

it("should map string to User", () => {
  expect(mapTextToUser("kamil")).toEqual(O.Some(User({ name: "kamil" })));
});
