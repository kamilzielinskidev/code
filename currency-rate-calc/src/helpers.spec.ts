import { AvailableRate } from "./domain/availableRate";
import { mapCurrenciesResponseToCurrenciesList } from "./helpers";

describe("Given currencies response", () => {
  const response = [
    { currency: "", code: "A", mid: 0 },
    { currency: "", code: "B", mid: 0 },
  ];
  it("should map it to list of codes", () => {
    expect(mapCurrenciesResponseToCurrenciesList(response)).toEqual([
      AvailableRate({ code: "A" }),
      AvailableRate({ code: "B" }),
    ]);
  });
});
