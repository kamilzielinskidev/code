import { AvailableRate } from "./availableRate";

describe("Given code", () => {
  const availableRate = {
    code: "usd",
  };
  it("should create object with proper value prop", () => {
    expect(AvailableRate(availableRate)).toEqual({ value: availableRate });
  });
});
