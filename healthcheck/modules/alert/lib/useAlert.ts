import { useAlertState } from "./alertState";

export const useAlert = () => {
  const { setMessage, setSeverity, setIsOpen } = useAlertState();

  const successAlert = (message: string) => {
    setMessage(message);
    setSeverity("success");
    setIsOpen(true);
  };

  const errorAlert = (message: string) => {
    setMessage(message);
    setSeverity("error");
    setIsOpen(true);
  };

  return { successAlert, errorAlert };
};
