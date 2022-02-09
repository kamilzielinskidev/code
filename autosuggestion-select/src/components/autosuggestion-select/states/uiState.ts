import create from "zustand";

import { Callback } from "../../../helpers";

export type UIState = {
  isPopupOpen: boolean;
};

export type UIActions = {
  open: Callback<void, void>;
  close: Callback<void, void>;
};

export const useUIState = create<UIState & UIActions>((set) => ({
  isPopupOpen: false,
  open: () => set({ isPopupOpen: true }),
  close: () => set({ isPopupOpen: false }),
}));
