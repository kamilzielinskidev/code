import { callIfNotNull, getData } from "./helpers";

it("should call callback if value is not nullable", () => {
  const mockFn = jest.fn();

  callIfNotNull(mockFn)(null);
  expect(mockFn).not.toHaveBeenCalled();
  callIfNotNull(mockFn)(1);
  expect(mockFn).toHaveBeenCalledWith(1);
});

it("should return axios response data", () => {
  expect(
    getData({ data: 123, config: {}, headers: {}, status: 200, statusText: "" })
  ).toBe(123);
});
