import { createTheme } from "@mui/material/styles";

const PRIMARY = "#FFE12C";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: PRIMARY,
    },
  },
  components: {
    MuiButton: {
      defaultProps: { size: "large", fullWidth: true },
    },
    MuiFormControlLabel: { styleOverrides: { label: { display: "none" } } },
  },
});

export default theme;
