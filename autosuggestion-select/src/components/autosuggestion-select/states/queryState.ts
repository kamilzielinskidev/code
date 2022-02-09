import create from "zustand";

import { Callback } from "../../../helpers";

export type QueryState = {
  query: string;
};

export type QueryActions = {
  clearQuery: Callback<void, void>;
  changeQuery: Callback<string, void>;
};

export const useQueryState = create<QueryState & QueryActions>((set) => ({
  query: "",
  clearQuery: () => set({ query: "" }),
  changeQuery: (query) => set({ query }),
}));
