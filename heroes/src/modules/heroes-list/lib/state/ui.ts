import create from "zustand";

type UiState = {
  isLoading: boolean;
  isError: boolean;
  setIsLoading: (a: boolean) => void;
  setIsError: (a: boolean) => void;
};

export const useUiState = create<UiState>((set) => ({
  isError: false,
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsError: (isError) => ({ isError }),
}));
