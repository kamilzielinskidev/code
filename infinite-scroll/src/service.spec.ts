import { MOCK_DEALS_RESPONSE } from "./mocks/MOCK_DEALS_RESPONSE";
import { mapApiDealResponseToDeal } from "./service";

it("mapApiDealResponseToDeal should map api response deal to domain deal", () => {
  expect(mapApiDealResponseToDeal(MOCK_DEALS_RESPONSE[0])).toEqual({
    title: "Deus Ex: Human Revolution - Director's Cut",
    salePrice: 2.99,
    normalPrice: 19.99,
    dealRating: 9.6,
    releaseDate: "2013-10-22",
    thumb:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/238010/capsule_sm_120.jpg?t=1619788192",
  });
});
