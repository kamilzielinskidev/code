import { TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";

export const Input: FC<TextFieldProps> = (props) => (
  <TextField
    sx={{
      ".MuiOutlinedInput-notchedOutline": {
        border: "1px solid rgba(255, 225, 44, 0.5)",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #FFE12C",
      },
      ".MuiInputLabel-formControl": {
        color: "#FFE12C",
        fontWeight: 500,
      },
      "&:hover": {
        backgroundColor: "rgba(255, 225, 44, 0.08);",
        transition:
          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
      },
    }}
    fullWidth
    color="primary"
    variant="outlined"
    {...props}
  />
);
