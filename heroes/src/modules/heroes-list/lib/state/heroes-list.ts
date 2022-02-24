import create from "zustand";

import { HeroesList } from "../../model";

type HeroesListState = {
  heroesList: HeroesList;
  isLoading: boolean;
  isError: boolean;
  setHeroesList: (heroesList: HeroesList) => void;
  setIsLoading: (a: boolean) => void;
  setIsError: (a: boolean) => void;
};

export const useHeroesListState = create<HeroesListState>((set) => ({
  heroesList: [],
  isLoading: false,
  isError: false,
  setHeroesList: (heroesList) => set({ heroesList }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsError: (isError) => set({ isError }),
}));
