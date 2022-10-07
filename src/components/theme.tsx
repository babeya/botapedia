import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      light: "#d3978d",
      main: "#8C7D30",
      dark: "#a24e3f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#595334",
    },
    background: {
      default: "#593C39",
      paper: "#47302e",
    },
    text: {
      primary: "rgba(217, 199, 167, 1)",
      secondary: "rgba(217, 199, 167, 0.6)",
      disabled: "rgba(217, 199, 167, 0.38)",
    },
  },
});

export default Theme;
