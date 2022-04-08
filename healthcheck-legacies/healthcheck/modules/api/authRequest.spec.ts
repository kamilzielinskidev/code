import { O, R } from "@mobily/ts-belt";
import { useAuthState } from "../auth/lib/useAuthState";
import { authPost } from "./authRequest";

it("should return error Result if user is not authenticated", () => {
  jest.spyOn(useAuthState, "getState").mockImplementation(() => ({
    user: O.None,
    setUser: () => {},
  }));

  expect(R.isError(authPost("", {}))).toBe(true);
});

it("should send post request if user is authenticated", () => {
  jest.spyOn(useAuthState, "getState").mockImplementation(() => ({
    user: O.Some({ name: "kamil" }),
    setUser: () => {},
  }));

  expect(R.isOk(authPost("", {}))).toBe(true);
});
