import { ComponentType } from "react";
import { VoidCallback } from "../../common/types";

export type ContextAction = {
  name: string;
  icon: ComponentType;
  action: VoidCallback;
};
