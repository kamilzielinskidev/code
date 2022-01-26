import { always, cond, equals, identity, ifElse, inc, pipe, T, when } from "rambda";

import { log, time, timeEnd, timeLog } from "./helpers";
import { gte, lt } from "./utils";

// without rambda
const forever21 = (age: number) => (age >= 21 ? 21 : age + 1);

// with rambda
const rambdaForever21 = (age: number) => ifElse(gte(21), always(21), inc)(age);
const alwaysDrivingAge = (age: number) => ifElse(lt(16), always(16), identity)(age);

pipe(log("=== FOREVER21"), log(forever21(12)), log(forever21(34)), log(rambdaForever21(12)), log(rambdaForever21(34)))();

pipe(log("=== ALWAYSDRIVING"), time("always"), log(alwaysDrivingAge(13)), log(alwaysDrivingAge(18)), timeEnd("always"))();

const alwaysDrivingAgeWhen = (age: number) => when(lt(16), always(16))(age);

pipe(log("=== ALWAYSWHEN"), time("alwaysWhen"), log(alwaysDrivingAgeWhen(13)), log(alwaysDrivingAgeWhen(18)), timeEnd("alwaysWhen"))();

const water = (temperature: number) =>
	cond<number, string>([
		[equals(0), always("water freezes at 0°C")],
		[equals(100), always("water boils at 100°C")],
		[T, (temp: number) => `nothing special happens at ${temp}°C`],
	])(temperature);

pipe(log("=== CONDITIONAL"), time("water"), log(water(0)), log(water(100)), log(water(12)), timeEnd("water"))();
