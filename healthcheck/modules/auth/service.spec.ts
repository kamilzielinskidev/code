import { O } from "@mobily/ts-belt";

import { User } from "./domain/user";
import { mapTextToUser, mapUserToText } from "./service";

it("should map empty string to optional none", () => {
  expect(mapTextToUser("")).toEqual(O.None);
});

it("should map string to User", () => {
  expect(mapTextToUser("kamil")).toEqual(O.Some(User({ name: "kamil" })));
});

it('should map None user to ""', () => {
  expect(mapUserToText(O.None)).toBe("");
});

it("should map Some user to username", () => {
  expect(mapUserToText(O.Some(User({ name: "kamil" })))).toBe("kamil");
});
