import { callIfNotNull } from "./helpers";

it("should call callback if value is not nullable", () => {
  const mockFn = jest.fn();

  callIfNotNull(null)(mockFn);
  expect(mockFn).not.toHaveBeenCalled();
  callIfNotNull(1)(mockFn);
  expect(mockFn).toHaveBeenCalledWith(1);
});
