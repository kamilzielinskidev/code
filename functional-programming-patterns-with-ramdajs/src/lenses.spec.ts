import { employeesFlavors } from "./employees-flavors";
import { getFavoriteFlavors, favoriteFlavorMix } from "./lenses";

describe("call favoriteFlavor with all employeesDatas as argument", () => {
  it("returns ['White Chocolate Raspberry Truffle', 'Butter Pecan','Midnight Cookies and Cream']", () => {
    expect(getFavoriteFlavors(employeesFlavors)).toEqual([
      "White Chocolate Raspberry Truffle",
      "Butter Pecan",
      "Midnight Cookies and Cream",
    ]);
  });
});

describe("call favoriteFlavorMix with all employeesDatas as argument", () => {
  it("returns ['WHITE CHOCOLATE RASPBERRY TRUFFLE IS A GREAT FLAVOR', 'BUTTER PECAN IS A GREAT FLAVOR', 'MIDNIGHT COOKIES AND CREAM IS A GREAT FLAVOR']", () => {
    expect(favoriteFlavorMix(employeesFlavors)).toEqual([
      "WHITE CHOCOLATE RASPBERRY TRUFFLE IS A GREAT FLAVOR",
      "BUTTER PECAN IS A GREAT FLAVOR",
      "MIDNIGHT COOKIES AND CREAM IS A GREAT FLAVOR",
    ]);
  });
});
