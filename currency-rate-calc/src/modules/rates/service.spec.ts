import { Currency } from "../../domain/currency";
import { Rate } from "../../domain/rate";
import * as api from "./api";
import { cutDecimals, divideByRate, multiplyByRate } from "./service";

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
