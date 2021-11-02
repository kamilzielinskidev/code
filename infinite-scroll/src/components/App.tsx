import { FC } from "react";

import { useDealsState } from "../state/deals/useDealsState";

import { DealsContainer } from "./DealsContainer";
export const App: FC = () => {
  const { clear, push } = useDealsState();

  const addDeal = () =>
    push([
      {
        title: "Super Deal",
        dealRating: 9,
        normalPrice: 12,
        releaseDate: "123123",
        thumb: "http:",
        salePrice: 1,
      },
    ]);

  return (
    <div>
      <DealsContainer />
      <div>
        <button className="border" onClick={addDeal}>
          add
        </button>
      </div>
      <div>
        <button className="button" onClick={clear}>
          clear
        </button>
      </div>
    </div>
  );
};
