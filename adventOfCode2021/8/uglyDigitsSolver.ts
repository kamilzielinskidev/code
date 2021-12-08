import { xor } from "ramda";
import { compareStrings } from "../utils";

const amountOfCommonJoints = (digit1: string) => (digit2: string) =>
  digit1
    .split("")
    .reduce((acc, next) => (digit2.includes(next) ? acc + 1 : acc), 0);

export const uglyDigitsSolver = (digits: string[]) => {
  const one = digits.find((digit) => digit.length === 2)!;
  const seven = digits.find((digit) => digit.length === 3)!;
  const four = digits.find((digit) => digit.length === 4)!;
  const eight = digits.find((digit) => digit.length === 7)!;
  const six = digits.find(
    (digit) =>
      digit.length === 6 && xor(digit.includes(one[0]), digit.includes(one[1]))
  )!;
  const nine = digits.find(
    (digit) => digit.length === 6 && amountOfCommonJoints(digit)(four) === 4
  )!;
  const zero = digits.find(
    (digit) =>
      digit.length === 6 &&
      !compareStrings(digit)(six) &&
      !compareStrings(digit)(nine)
  )!;
  const three = digits.find(
    (digit) => digit.length === 5 && amountOfCommonJoints(digit)(seven) === 3
  )!;
  const five = digits.find(
    (digit) => digit.length === 5 && amountOfCommonJoints(digit)(six) === 5
  )!;
  const two = digits.find(
    (digit) =>
      digit.length === 5 &&
      !compareStrings(digit)(three) &&
      !compareStrings(digit)(five)
  )!;
  return {
    [zero]: 0,
    [one]: 1,
    [two]: 2,
    [three]: 3,
    [four]: 4,
    [five]: 5,
    [six]: 6,
    [seven]: 7,
    [eight]: 8,
    [nine]: 9,
  };
};
