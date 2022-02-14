import { Rate } from "../../domain/rate";
import * as fetch from "../../lib/fetch";
import { getRate } from "./api";

const MOCK_RESPONSE = {
  table: "A",
  currency: "frank szwajcarski",
  code: "CHF",
  rates: [{ no: "030/A/NBP/2022", effectiveDate: "2022-02-14", mid: 4.375 }],
};

jest.spyOn(fetch, "get").mockResolvedValue(MOCK_RESPONSE);

it("Should get list of currencies codes", () => {
  expect(getRate({ currency: "CHF", icon: "🇨🇭" })).resolves.toEqual(
    Rate({ code: "CHF", date: new Date("2022-02-14"), value: 4.375 })
  );
});
