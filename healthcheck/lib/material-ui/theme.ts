import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffe12c",
    },
  },
  components: {
    MuiButton: {
      defaultProps: { size: "large" },
      styleOverrides: { root: { width: "16rem" } },
    },
  },
});

export default theme;
