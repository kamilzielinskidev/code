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

    it("returns OBOB", () => {
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

    it("returns [OBOB, ECNERWAL, NONA]", () => {
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
    it("returns 'Spongebob wouldn't enjoy a tech career.'", () => {
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
    it("returns 'Sandy may enjoy a tech career!'", () => {
      expect(shouldCode(codePerson)).toBe("Sandy may enjoy a tech career!");
    });
  });
});

describe("call keepYoungAdults function for adults array", () => {
  const adults: Adults = [
    { age: 20 },
    { age: 16 },
    { age: 18 },
    { age: 26 },
    { age: 25 },
    { age: 19 },
  ];
  it(`returns [{"age":20},{"age":18},{"age":25},{"age":19}]`, () => {
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
    it("returns Bobo", () => {
      expect(defaultToBobo(null)).toBe("Bobo");
    });
  });
  describe("and 'Patrick' as 2nd argument", () => {
    it("returns Patrick", () => {
      expect(defaultToBobo("Patrick")).toBe("Patrick");
    });
  });
});

describe("call getTotalPrice with the cart array", () => {
  xit("returns '$44.20'", () => {});
});

describe("call getCheapestItem from the cart array", () => {
  xit("returns 'soap'", () => {});
});

describe("call getTop3MealsFor from menu for price 12", () => {
  xit("returns 'Lamb Gyro', 'House Salad' and 'Gigantus Fries' objects arrays", () => {});
});

describe("call getMedianPaycheck from employees list above $100k", () => {
  xit("returns $141,000", () => {});
});

describe("call getCreditScoreRatings for scores [740, 550, 681, 805]", () => {
  xit("returns ['740 is good', '550 is poor', ' 681 is fair', '805 is excellent!']", () => {});
});
