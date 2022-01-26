import { assoc, both, complement, either, equals, evolve, inc, isNil, pipe, prop, propOr, tap } from "rambda";
import { log } from "./helpers";

import { LambdaFn, Person, TransformFn } from "./types";
import { gte } from "./utils";

const person: Person = { birthCountry: "POLAND", age: 21 };

const wasBornInCountry: LambdaFn<Person, boolean> = pipe(prop("birthCountry"), equals("POLAND"));
const wasNaturalized: LambdaFn<Person, boolean> = pipe(propOr(null, "naturalizationDate"), complement(isNil));
const isOver18: LambdaFn<Person, boolean> = pipe(prop("age"), gte(18));

const isCitizen = either(wasBornInCountry, wasNaturalized);

const isEligibleToVote = both(isOver18, isCitizen);

pipe(log("=== POINTFREE REFACTOR"), log(isEligibleToVote(person)))();

pipe(tap(log("=== ASSOC")), tap(console.log), assoc("birthCountry", "GERMANY"), tap(console.log), tap(log(person)))(person);

const celebrateBirthday: TransformFn<Person> = evolve({ age: inc });

pipe(tap(log("=== EVOLVE")), celebrateBirthday, tap(console.log), tap(log(person)))(person);
