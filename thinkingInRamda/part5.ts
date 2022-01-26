import { always, both, either, ifElse, inc, pipe, when } from "rambda";

import { log } from "./helpers";
import { Person, TransformFn } from "./types";
import { gte, lt } from "./utils";

const rambdaForever21: TransformFn<number> = ifElse(gte(21), always(21), inc);
const alwaysDrivingAge: TransformFn<number> = when(lt(16), always(16));

pipe(log("=== POINTFREE"), log(rambdaForever21(12)), log(rambdaForever21(23)), log(alwaysDrivingAge(12)), log(alwaysDrivingAge(17)))();

const person: Person = { birthCountry: "POLAND", age: 21 };

const wasBornInCountry = (person: Person) => person.birthCountry === "POLAND";
const wasNaturalized = (person: Person) => Boolean(person.naturalizationDate);
const isOver18 = (person: Person) => person.age >= 18;

const isCitizen = either(wasBornInCountry, wasNaturalized);

const isEligibleToVote = both(isOver18, isCitizen);

pipe(log("=== POINTFREE REFACTOR"), log(isEligibleToVote(person)))();
