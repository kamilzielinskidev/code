import { get } from "../common/get";
import { Url } from "../common/url";

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

const CHEAP_SHARK_API_URL: Url =
  "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=3";

export const getDealsResponse = () => get<DealsResponse>(CHEAP_SHARK_API_URL);
