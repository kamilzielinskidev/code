import { Url } from "../common/url";

export type Deal = {
  title: string;
  salePrice: number;
  normalPrice: number;
  dealRating: number;
  releaseDate: string;
  thumb: Url;
};

export type Deals = Array<Deal>;
