import create from "zustand";

type CreateARoomState = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useCreateARoomState = create<CreateARoomState>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
