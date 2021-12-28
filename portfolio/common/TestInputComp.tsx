import { FC } from "react";
import { useLocalStorage } from "./state/useLocalStorage";

export const TestInputComp: FC = () => {
  const [_, updateIsSomethingElse] = useLocalStorage<string>("isSomethingElse");
  return (
    <input
      className="border "
      onChange={(v) => updateIsSomethingElse(() => v.target.value)}
    />
  );
};
