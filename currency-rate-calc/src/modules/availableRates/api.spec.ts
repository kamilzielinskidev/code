import { AvailableRate } from "../../domain/availableRate";
import * as fetch from "../../lib/fetch";
import { getRates, mapRatesResponseToRatesList } from "./api";

const MOCK_RESPONSE = [
  {
    table: "A",
    no: "030/A/NBP/2022",
    effectiveDate: "2022-02-14",
    rates: [
      { currency: "dolar amerykański", code: "USD", mid: 4.0439 },
      { currency: "dolar kanadyjski", code: "CAD", mid: 3.1666 },
    ],
  },
];

jest.spyOn(fetch, "get").mockResolvedValue(MOCK_RESPONSE);

it("Should get list of currencies codes", () => {
  expect(getRates()).resolves.toEqual([
    AvailableRate({ code: "USD" }),
    AvailableRate({ code: "CAD" }),
  ]);
});

describe("Given currencies response", () => {
  it("should map it to list of codes", () => {
    expect(mapRatesResponseToRatesList(MOCK_RESPONSE)).toEqual([
      AvailableRate({ code: "USD" }),
      AvailableRate({ code: "CAD" }),
    ]);
  });
});
