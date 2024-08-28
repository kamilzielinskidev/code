import { peekedValue2, poppedValue, s1, s2, s4, s8 } from "./Stack";

describe("Stack", () => {
  it("should return proper values", () => {
    // should not use 'proper' in test but for the sake of simplicity
    expect(s1).toEqual([10]);
    expect(s2).toEqual([10, 20]);
    expect(poppedValue).toBe(30);
    expect(s4).toEqual([10, 20]);
    expect(peekedValue2).toBe(20);
    expect(s8).toEqual([10, 20, 40]);
  });
});
