export type Action<T> = {
  type: T;
};

export type ActionPaylod<T, R> = Action<T> & { payload: R };
