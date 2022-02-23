import axios from "axios";
import { get } from "./fetch";

it("Should return ok status for resolved response", async () => {
  jest.spyOn(axios, "get").mockResolvedValue({ data: 1 });
  expect(await get("")).toEqual({ data: 1, status: "OK" });
});

it("Should return error status for resolved response", async () => {
  jest.spyOn(axios, "get").mockRejectedValue({ data: 1 });
  expect(await get("")).toEqual({ data: { data: 1 }, status: "ERROR" });
});
