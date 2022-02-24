type ResponseStateM<A> = {
  init: (cb: () => void) => ResponseStateM<A>;
  map: <B>(cb: (a: A) => B) => ResponseStateM<B>;
  chain: <B>(cb: (a: A) => B) => Promise<B>;
  catch: <B>(cb: (a: Error) => B) => ResponseStateM<A | B>;
};

const ResponseState = <A>(a: Promise<A>): ResponseStateM<A> => ({
  init: (cb) => {
    cb();
    return ResponseState(a);
  },
  map: (cb) => ResponseState(a.then(cb)),
  chain: (cb) => a.then(cb).catch(cb),
  catch: (cb) => ResponseState(a.catch(cb)),
});

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
