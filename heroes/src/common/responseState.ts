type ResponseStateM<A> = {
  init: (cb: () => void) => ResponseStateM<A>;
  map: <B>(cb: (a: A) => B) => ResponseStateM<B>;
  chain: <B>(cb: (a: A) => B) => Promise<B>;
  catch: <B>(cb: (a: Error) => B) => ResponseStateM<A | B>;
};

export const ResponseState = <A>(a: Promise<A>): ResponseStateM<A> => ({
  init: (cb) => {
    cb();
    return ResponseState(a);
  },
  map: (cb) => ResponseState(a.then(cb)),
  chain: (cb) => a.then(cb).catch(cb),
  catch: (cb) => ResponseState(a.catch(cb)),
});
