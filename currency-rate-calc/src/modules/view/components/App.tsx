import React, { FC } from "react";

import { IGetInput } from "./IGetInput";
import { IHaveInput } from "./IHaveInput";

export const App: FC = () => {
  return (
    <div>
      <IHaveInput />
      <IGetInput />
    </div>
  );
};
