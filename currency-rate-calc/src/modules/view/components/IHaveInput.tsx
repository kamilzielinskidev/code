import { FC } from "react";

import { useChangeIHave } from "../../rates/lib/useChangeIHave";
import { useRateState } from "../../rates/lib/useRateState";

export const IHaveInput: FC = () => {
  const changeIHave = useChangeIHave();
  const { iHave } = useRateState();

  return (
    <div>
      <div>I have:</div>
      <div>
        <input
          type="number"
          min={0}
          value={iHave}
          onChange={(e) => changeIHave(e.target.value)}
        />
        PLN
      </div>
    </div>
  );
};
