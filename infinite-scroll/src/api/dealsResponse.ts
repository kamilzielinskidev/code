import { pipe } from "ramda";

import { get } from "../common/get";

export type DealResponse = {
  internalName: string;
  title: string;
  metacriticLink: string;
  dealID: string;
  storeID: string;
  gameID: string;
  salePrice: string;
  normalPrice: string;
  isOnSale: string;
  savings: string;
  metacriticScore: string;
  steamRatingText: string;
  steamRatingPercent: string;
  steamRatingCount: string;
  steamAppID: string;
  releaseDate: number;
  lastChange: number;
  dealRating: string;
  thumb: string;
};

export type DealsResponse = Array<DealResponse>;

const cheapSharkApiUrl = (pageNumber: number) =>
  `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=30&pageSize=3&pageNumber=${pageNumber}`;

export const getDealsResponse = pipe(cheapSharkApiUrl, get<DealsResponse>());
