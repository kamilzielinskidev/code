import {
  defaultTo,
  keepYoungAdults,
  shouldCode,
  upperAndReverseFirstName,
  upperAndReverseFirstNameMultiple,
} from "./index";
import { Adults, CodeUser as CodePerson, User, Users } from "./model";

describe("call upperAndReverseFirstName function", () => {
  describe("for single user", () => {
    const user: User = { firstName: "Bobo", lastName: "Flakes" };

    it("return OBOB", () => {
      expect(upperAndReverseFirstName(user)).toBe("OBOB");
    });
  });

  describe("for multiple users", () => {
    const users: Users = [
      {
        firstName: "Bobo",
        lastName: "Flakes",
      },
      {
        firstName: "Lawrence",
        lastName: "Shilling",
      },
      {
        firstName: "Anon",
        lastName: "User",
      },
    ];

    it("return [OBOB, ECNERWAL, NONA]", () => {
      expect(upperAndReverseFirstNameMultiple(users)).toEqual([
        "OBOB",
        "ECNERWAL",
        "NONA",
      ]);
    });
  });
});

describe("call shouldCode function", () => {
  describe("for non enjoying person", () => {
    const codePerson: CodePerson = {
      name: "Spongebob",
      lovesTech: false,
      worksHard: true,
    };
    it("return 'Spongebob wouldn't enjoy a tech career.'", () => {
      expect(shouldCode(codePerson)).toBe(
        "Spongebob wouldn't enjoy a tech career."
      );
    });
  });
  describe("for enjoying person", () => {
    const codePerson: CodePerson = {
      name: "Sandy",
      lovesTech: true,
      worksHard: true,
    };
    it("return 'Sandy may enjoy a tech career!'", () => {
      expect(shouldCode(codePerson)).toBe("Sandy may enjoy a tech career!");
    });
  });
});

describe("call keepYoungAdults function", () => {
  const adults: Adults = [
    { age: 20 },
    { age: 16 },
    { age: 18 },
    { age: 26 },
    { age: 25 },
    { age: 19 },
  ];
  it(`return [{"age":20},{"age":18},{"age":25},{"age":19}]`, () => {
    expect(keepYoungAdults(adults)).toEqual([
      { age: 20 },
      { age: 18 },
      { age: 25 },
      { age: 19 },
    ]);
  });
});

describe("call defaultTo with Bobo as 1st argument", () => {
  const defaultToBobo = defaultTo("Bobo");
  describe("and null as 2nd argument", () => {
    it("return Bobo", () => {
      expect(defaultToBobo(null)).toBe("Bobo");
    });
  });
  describe("and 'Patrick' as 2nd argument", () => {
    it("return Patrick", () => {
      expect(defaultToBobo("Patrick")).toBe("Patrick");
    });
  });
});
