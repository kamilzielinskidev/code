import axios from "axios";
import { get } from "./fetch";

it("Should return ok status for resolved response", async () => {
  jest.spyOn(axios, "get").mockResolvedValue({ data: 1 });
  expect(await get("")).toEqual(1);
});
