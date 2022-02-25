import { FC } from "react";

import { Button } from "../../../../../common/lib/Button";
import { useGetHeroesList } from "../../hooks/useGetHeroesList";

export const HeroesListError: FC = () => {
  const { refreshHeroesList } = useGetHeroesList();

  return (
    <div className="mt-8 p-8">
      <div className="text-7xl">Ooops...</div>
      <div className="text-xl mt-2">Something went wrong.</div>
      <Button className="mt-2" onClick={refreshHeroesList}>
        Try again
      </Button>
    </div>
  );
};
