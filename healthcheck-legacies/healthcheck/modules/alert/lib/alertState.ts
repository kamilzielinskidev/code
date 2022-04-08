import create from "zustand";

type AlertState = {
  isOpen: boolean;
  message: string;
  severity: "error" | "info" | "success" | "warning";
  setIsOpen: (isOpen: boolean) => void;
  setMessage: (message: string) => void;
  setSeverity: (severity: "error" | "info" | "success" | "warning") => void;
};

export const useAlertState = create<AlertState>((set) => ({
  isOpen: false,
  message: "",
  severity: "success",
  setIsOpen: (isOpen) => set({ isOpen }),
  setMessage: (message) => set({ message }),
  setSeverity: (severity) => set({ severity }),
}));
