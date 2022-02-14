import * as api from "../api";
import * as changeAvailableRates from "./availableRatesState";
import { getRatesCb } from "./useGetRates";

const spy = jest.spyOn(changeAvailableRates, "changeAvailableRates");

jest.spyOn(api, "getRates").mockResolvedValue([{ code: "A" }, { code: "B" }]);

fit("Should get rates list and call callback", async () => {
  await getRatesCb();
  expect(spy).toHaveBeenCalledWith([{ code: "A" }, { code: "B" }]);
});
