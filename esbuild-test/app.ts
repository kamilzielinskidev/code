import fs from "fs";

for (let i = 0; i < 10000; i++) {
  fs.appendFileSync(
    "test.spec.ts",
    `it("should ${i} equals to ${i}", () => {\n\texpect({ i: ${i}, a: 1 }).toEqual({ i: ${i}, a: 1 });\n});\n`
  );
}
