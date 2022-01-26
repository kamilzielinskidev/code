import { join, lensPath, lensProp, map, over, pipe, split, tap, toUpper } from "rambda";

import { LensPerson } from "./types";

const person: LensPerson = {
	name: "Randy",
	socialMedia: {
		github: "randycoulman",
	},
};

const spreadStr = pipe(
	split(""),
	map((x) => `${x} `),
	join("")
);

const nameLens = lensProp("name");

const githubLens = lensPath(["socialMedia", "github"]);

const upperGithub = over(githubLens, toUpper);

pipe(tap(console.log), upperGithub, over(nameLens, spreadStr), tap(console.log))(person);
