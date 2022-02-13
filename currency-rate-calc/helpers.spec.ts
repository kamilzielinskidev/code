import { andThen } from "./helpers";

describe("With mocked add1 method and promise value 0", () => {
  const mockClass = {
    mockFn: (a: number) => a + 1,
  };
  const mockedPromise = Promise.resolve(0);

  it("should return promise with value + 1 after promise resolved", () => {
    expect(andThen(mockClass.mockFn)(mockedPromise)).resolves.toEqual(1);
  });
});
