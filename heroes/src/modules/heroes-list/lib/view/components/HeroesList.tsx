import { Spin } from "antd";
import { FC } from "react";

import { useGetHeroesList } from "../../hooks/useGetHeroesList";
import { useHeroesList } from "../../hooks/useHeroesList";
import { HeroesListError } from "./HeroesListError";
import { SingleHero } from "./SingleHero";

const Loader: FC = () => (
  <div className="flex justify-center">
    <Spin size="large" />
  </div>
);

const List: FC = () => {
  const { heroesList } = useHeroesList();

  return (
    <ul>
      {heroesList.map((hero) => (
        <li key={hero.id}>
          <SingleHero {...hero} />
        </li>
      ))}
    </ul>
  );
};

export const HeroesList: FC = () => {
  const { isError, isLoading } = useHeroesList();
  useGetHeroesList();

  return (
    <div className="p-4">
      {isLoading && <Loader />}
      {isError && <HeroesListError />}
      {!isLoading && !isError && <List />}
    </div>
  );
};
