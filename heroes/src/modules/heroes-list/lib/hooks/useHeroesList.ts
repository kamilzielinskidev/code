import { useHeroesListState } from "../state/heroes-list";

export const useHeroesList = () => {
  const { isError, isLoading, heroesList } = useHeroesListState();

  return { isError, isLoading, heroesList };
};
