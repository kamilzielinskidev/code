import { FC } from "react";

import { Alert, Snackbar } from "@mui/material";

import { useAlertState } from "../lib/alertState";

export const AppAlert: FC = () => {
  const { isOpen, setIsOpen, message, severity } = useAlertState();

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={() => setIsOpen(false)}
      message={message}
    >
      <Alert
        onClose={() => setIsOpen(false)}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
