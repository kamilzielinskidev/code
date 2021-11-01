import { format, fromUnixTime } from "date-fns";
import { curryN, evolve, flip, pick, pipe } from "ramda";

import { DealResponse } from "./api/dealsResponse";
import { Deal } from "./domain/deal";

const parseFloat = Number.parseFloat;

type LamdaFn<A, B> = (a: A) => B;

const curriedFlipedFormat = flip(curryN(2)(format));

export const mapApiDealResponseToDeal: LamdaFn<DealResponse, Deal> = pipe(
  pick([
    "title",
    "salePrice",
    "normalPrice",
    "dealRating",
    "releaseDate",
    "thumb",
  ]),
  evolve({
    salePrice: parseFloat,
    normalPrice: parseFloat,
    dealRating: parseFloat,
    releaseDate: pipe(fromUnixTime, curriedFlipedFormat("y-MM-dd")),
  })
);
