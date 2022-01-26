export type LambdaFn<T, R> = (...args: T[]) => R;
export type TransformFn<T> = LambdaFn<T, T>;

export type Person = {
	birthCountry: string;
	naturalizationDate?: Date | null;
	age: number;
};

export type LensPerson = {
	name: string;
	socialMedia: {
		github: string;
	};
};
