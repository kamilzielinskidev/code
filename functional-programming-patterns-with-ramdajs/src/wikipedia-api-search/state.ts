import create from "zustand";

import { ResultsState, SearchState } from "./models";
import { getWikipediaQuery } from "./PF";

export const resultsState = create<ResultsState>((set) => ({
  results: [],
  setResults: (results) => set({ results }),
}));

// TODO: to use Either from fp-ts
export const searchState = create<SearchState>((set) => ({
  search: "",
  setSearch: (v) => {
    set({ search: v });

    //TODO: refactor this, test?
    getWikipediaQuery(v).then((results) => resultsState.setState({ results }));
  },
}));
