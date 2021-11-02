import { useDealsState } from "../state/deals/useDealsState";
import { DealCard } from "./DealCard";

export const DealsContainer = () => {
  const { deals } = useDealsState();
  return (
    <div>
      {deals.map((props, i) => (
        <DealCard key={i} {...props} />
      ))}
    </div>
  );
};
