import { Currency } from "../../domain/currency";
import { Rate } from "../../domain/rate";
import * as api from "./api";
import {
  cutDecimals,
  divideByRate,
  isStringANumber,
  multiplyByRate,
} from "./service";

jest
  .spyOn(api, "getRate")
  .mockResolvedValue(Rate({ code: "CHF", date: new Date(), value: 3 }));

it("Should cut decimals up to 3 digits", () => {
  expect(cutDecimals(0.333333)).toBe(0.333);
});

it("Should divide the value by received from api rate", async () => {
  expect(await divideByRate(Currency("CHF"))(1)).toBe(0.333);
});

it("Should multiply the value by received from api rate", async () => {
  expect(await multiplyByRate(Currency("CHF"))(1)).toBe(3);
});

it("Should return true for a number, false for NaN", () => {
  expect(isStringANumber("1.43")).toBe(true);
  expect(isStringANumber("a")).toBe(false);
});
