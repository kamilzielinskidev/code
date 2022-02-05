import create from "zustand";

import { Callback } from "../../helpers";

export type UIState = {
  isPopupOpen: boolean;
  togglePopup: Callback<boolean, void>;
};

export const useUIState = create<UIState>((set) => ({
  isPopupOpen: false,
  togglePopup: (isPopupOpen) => set({ isPopupOpen }),
}));
