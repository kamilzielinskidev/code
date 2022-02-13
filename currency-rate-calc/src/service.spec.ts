import { AvailableRate } from "./domain/availableRate";
import { getCurrencies } from "./service";

jest.mock("./api", () => ({
  fetchCurrencies: () =>
    Promise.resolve([
      { currency: "", code: "A", mid: 0 },
      { currency: "", code: "B", mid: 0 },
    ]),
}));

it("should get list of currencies codes", () => {
  expect(getCurrencies()).resolves.toEqual([
    AvailableRate({ code: "A" }),
    AvailableRate({ code: "B" }),
  ]);
});
