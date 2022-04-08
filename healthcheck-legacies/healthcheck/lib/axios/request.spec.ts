import axios from "axios";

import { R } from "@mobily/ts-belt";

import { get, post } from "./request";

it("should return ok R for get 200 status request", async () => {
  jest.spyOn(axios, "get").mockResolvedValue({ data: 123 });
  expect(await get("url")).toEqual(R.Ok(123));
});

it("should return error R for get error requests", async () => {
  jest.spyOn(axios, "get").mockRejectedValue({ message: "error123" });
  expect(await get("url")).toEqual(R.Error({ message: "error123" }));
});

it("should return ok R for post 200 status request", async () => {
  jest.spyOn(axios, "post").mockResolvedValue({ data: 123 });
  expect(await post("url", {})).toEqual(R.Ok(123));
});

it("should return error R for post error requests", async () => {
  jest.spyOn(axios, "post").mockRejectedValue({ message: "error123" });
  expect(await post("url", {})).toEqual(R.Error({ message: "error123" }));
});
