const push = <A>(stack: A[], value: A): A[] => [...stack, value];
const pop = <A>(stack: A[]): [A[], A] => [
  stack.slice(0, -1),
  stack[stack.length - 1]!,
]; // Non null assertion is safe here
const peek = <A>(stack: A[]): [A[], A] => [stack, stack[stack.length - 1]!]; // Non null assertion is safe here
const size = <A>(stack: A[]): [A[], number] => [stack, stack.length];

// 2.
export const s0 = [] as number[];
export const s1 = push(s0, 10);
export const s2 = push(s1, 20);
export const s3 = push(s2, 30);
export const [s4, poppedValue] = pop(s3);
export const [s5, peekedValue] = peek(s4);
export const [s6, peekedValue2] = peek(s5);
export const s7 = push(s6, 40);
export const [s8, sizeOfStack] = size(s7);

// 3. no mutations

// 4. Advantages: safer code, no spaghetti, no side effects
// Disadvantages: more memory usage, slower

// 5. no mutatinons is easier to test because each value is not muted so can be tested separately without affecting other values
