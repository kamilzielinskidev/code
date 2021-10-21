import { add } from "./index";

describe("add function", () => {
  describe("arguments 69 and 420 are given", () => {
    const arg1 = 69;
    const arg2 = 420;
    it("return 489", () => {
      expect(add(arg1)(arg2)).toBe(489);
    });
  });
});
