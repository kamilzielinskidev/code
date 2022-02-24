import { useEffect } from "react";

import { getHeroesList } from "../../api";
import { useHeroesListState } from "../state/heroes-list";

export const useGetHeroesList = () => {
  const { setIsLoading, setHeroesList, setIsError } = useHeroesListState();

  useEffect(() => {
    setIsLoading(true);
    getHeroesList()
      .then(setHeroesList)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);
};
