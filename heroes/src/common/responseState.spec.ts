import { ResponseState } from "./responseState";

describe("Chained ResponseState", () => {
  it("should call init on start before any other", async () => {
    const mockInitFn = jest.fn();
    const mockMapFn = jest.fn().mockImplementation((x) => x + 1);
    await ResponseState(Promise.resolve(1)).init(mockInitFn).map(mockMapFn);

    expect(mockInitFn.mock.invocationCallOrder[0]).toBeLessThan(
      mockMapFn.mock.invocationCallOrder[0]
    );
  });

  it("should map the resolved value to another ResponseState", async () => {
    const mockMapFn = jest.fn().mockImplementation((x) => x + 1);
    await ResponseState(Promise.resolve(1)).map(mockMapFn);

    expect(mockMapFn).toReturnWith(2);
  });

  it("should catch the rejected value to another ResponseState", async () => {
    const mockMapFn = jest.fn().mockImplementation((x) => x + "error");

    await ResponseState(Promise.reject("error1")).catch(mockMapFn);

    expect(mockMapFn).toReturnWith("error1error");
  });

  it("should chain the resolved or rejected value to simple promise", () => {
    fail("TODO");
  });

  it("should chain fns properly", () => {
    fail("TODO");
  });
});
