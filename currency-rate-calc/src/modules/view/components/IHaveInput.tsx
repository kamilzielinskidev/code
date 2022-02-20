import { FC, memo } from "react";

import { useIHave } from "../../rates/lib/useIHave";

export const IHaveInput: FC = memo(() => {
  const [iHave, changeIHave] = useIHave();

  return (
    <div>
      <div>I have:</div>
      <div>
        <input value={iHave} onChange={(e) => changeIHave(e.target.value)} />
        PLN
      </div>
    </div>
  );
});
