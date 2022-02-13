import { mapCurrenciesResponseToCurrenciesList } from "./helpers";

describe("Given currencies response", () => {
  const response = [
    { currency: "yuan renminbi (Chiny)", code: "CNY", mid: 0.6238 },
    { currency: "SDR (MFW)", code: "XDR", mid: 5.5429 },
  ];
  it("should map it to list of codes", () => {
    expect(mapCurrenciesResponseToCurrenciesList(response)).toEqual([
      "CNY",
      "XDR",
    ]);
  });
});
