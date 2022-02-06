import create from "zustand";

import { Callback } from "../../helpers";
import { University } from "./models";

export type UIState = {
  isPopupOpen: boolean;
  togglePopup: Callback<boolean, void>;
};

export const useUIState = create<UIState>((set) => ({
  isPopupOpen: false,
  togglePopup: (isPopupOpen) => set({ isPopupOpen }),
}));

export type QueryState = {
  query: string;
  clearQuery: Callback<void, void>;
  changeQuery: Callback<string, void>;
};

export const useQueryState = create<QueryState>((set) => ({
  query: "",
  clearQuery: () => set({ query: "" }),
  changeQuery: (query) => set({ query }),
}));

export type APIUniversitiesState = {
  APIuniversities: University[];
  changeAPIUniversities: Callback<University[], void>;
};

export const useAPIUniversitiesState = create<APIUniversitiesState>((set) => ({
  APIuniversities: [],
  changeAPIUniversities: (universities) =>
    set({ APIuniversities: universities }),
}));

export type UniversitiesPicks = {
  pickedUniversities: University[];
  addUniversity: Callback<University, void>;
  removeUniversity: Callback<University, void>;
  clearPicks: Callback<void, void>;
  changeUniversitiesPicks: Callback<University[], void>;
};

export const useUniversitiesPicksState = create<UniversitiesPicks>((set) => ({
  pickedUniversities: [],
  clearPicks: () => set({ pickedUniversities: [] }),
  addUniversity: (university) =>
    set((state) => ({
      pickedUniversities: [...state.pickedUniversities, university],
    })),
  removeUniversity: (university) =>
    set((state) => ({
      pickedUniversities: state.pickedUniversities.filter(
        (stateUniversity) => stateUniversity !== university
      ),
    })),
  changeUniversitiesPicks: (universities) =>
    set({ pickedUniversities: universities }),
}));
