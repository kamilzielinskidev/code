const ResponseState = <T>(a: Promise<T>) => ({
  loading: (cb: () => void) => {
    cb();
    return ResponseState(a);
  },
  then: <A>(cb: (a: T) => A) => ResponseState(a.then(cb)),
  catch: <A>(cb: (a: Error) => A) => ResponseState(a.catch(cb)),
});

it("should call loading fn on init", () => {
  const mockClass = {
    loading: () => {},
  };
  const loading = jest.spyOn(mockClass, "loading");

  ResponseState(Promise.resolve()).loading(mockClass.loading);
  expect(loading).toHaveBeenCalled();
});

it("should call map fn on resolved", async () => {
  const mockClass = {
    then: (a: number) => a + 1,
  };
  const then = jest.spyOn(mockClass, "then");

  await ResponseState(Promise.resolve(1)).then(mockClass.then);

  expect(then).toReturnWith(2);
});

it("should call catch on rejected", async () => {
  const mockClass = {
    catched: (a: Error) => a.message,
  };

  const catched = jest.spyOn(mockClass, "catched");

  await ResponseState(Promise.reject({ message: "test1" })).catch(
    mockClass.catched
  );

  expect(catched).toReturnWith("test1");
});

it("should chain the fns properly", async () => {
  const mockClass = {
    init: () => {},
    then1: (a: number) => a + 1,
    then2: (a: number) => a + 10,
    then3: (a: number) => {
      throw new Error("test");
    },
    then4: (a: number) => a + 100,
    catched: (a: Error) => a.message,
  };

  const init = jest.spyOn(mockClass, "init");
  const then1 = jest.spyOn(mockClass, "then1");
  const then2 = jest.spyOn(mockClass, "then2");
  const then4 = jest.spyOn(mockClass, "then4");
  const catched = jest.spyOn(mockClass, "catched");

  await ResponseState(Promise.resolve(1))
    .loading(mockClass.init)
    .then(mockClass.then1)
    .then(mockClass.then2)
    .then(mockClass.then3)
    .then(mockClass.then4)
    .catch(mockClass.catched);

  expect(init.mock.invocationCallOrder[0]).toBeLessThan(
    then1.mock.invocationCallOrder[0]
  );

  expect(then1.mock.invocationCallOrder[0]).toBeLessThan(
    then2.mock.invocationCallOrder[0]
  );

  expect(then2).toReturnWith(12);
  expect(then4).not.toBeCalled();
  expect(catched).toReturnWith("test");
});

it("should contain value", () => {});
it("should map the value by map function", () => {});
it("should have chain fn instead of then", () => {});
