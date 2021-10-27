import create from "zustand";
import { SearchState } from "./models";

// TODO: to use Either from fp-ts
export const useSearchState = create<SearchState>((set) => ({
  search: "",
  setSearch: (v) => set({ search: v }),
}));
