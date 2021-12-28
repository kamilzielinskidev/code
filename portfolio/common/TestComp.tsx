import { FC } from "react";
import { useLocalStorage } from "./state/useLocalStorage";

export const TestComp: FC = () => {
  const [_, updateIsMenuOpen] = useLocalStorage<boolean>("isMenuOpen");
  return (
    <button className="border " onClick={() => updateIsMenuOpen((v) => !v)}>
      close
    </button>
  );
};
