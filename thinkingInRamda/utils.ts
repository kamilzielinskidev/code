import { curry } from "rambda";

import { LambdaFn } from "./types";

export const lt = curry((n1: number, n2: number) => n2 < n1);
export const gte = curry((n1: number, n2: number) => n2 >= n1);
export const thunkify =
	<T, R>(fn: LambdaFn<T, R>) =>
	(...x: T[]) =>
	() =>
		fn(...x);
