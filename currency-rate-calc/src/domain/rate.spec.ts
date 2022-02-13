import { Rate } from "./rate";

describe("Given code, value and date", () => {
  const rate = {
    code: "usd",
    value: 10,
    date: new Date(2022, 1, 10),
  };
  it("should create object with proper value prop", () => {
    expect(Rate(rate)).toEqual({ value: rate });
  });
});
