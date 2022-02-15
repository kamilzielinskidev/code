import { andThen, hasValue, toString } from "./helpers";

describe("With mocked add1 method and promise value 0", () => {
  const mockClass = {
    mockFn: (a: number) => a + 1,
  };
  const mockedPromise = Promise.resolve(0);

  it("should return promise with value + 1 after promise resolved", () => {
    expect(andThen(mockClass.mockFn)(mockedPromise)).resolves.toEqual(1);
  });
});

it("Should convert number to string", () => {
  expect(toString(10)).toBe("10");
});

it("Should return false for undefined or null", () => {
  expect(hasValue(undefined)).toBe(false);
  expect(hasValue(null)).toBe(false);
  expect(hasValue(1)).toBe(true);
});
