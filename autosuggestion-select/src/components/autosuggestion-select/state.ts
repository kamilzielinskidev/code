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

export type UniversitiesState = {
  universities: University[];
  changeUniversities: Callback<University[], void>;
};

export const useUniversitiesState = create<UniversitiesState>((set) => ({
  universities: [],
  changeUniversities: (universities) => set({ universities }),
}));
