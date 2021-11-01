import { FC } from "react";

import { MOCK_DEALS_RESPONSE } from "../mocks/MOCK_DEALS_RESPONSE";
import { mapApiDealResponseToDeal } from "../service";
import { DealCard } from "./DealCard";

export const App: FC = () => {
  // TODO: useFetchDealsHook written with rxjs
  return (
    <div>
      {MOCK_DEALS_RESPONSE.map(mapApiDealResponseToDeal).map((props) => (
        <DealCard key={props.title} {...props} />
      ))}
    </div>
  );
};
