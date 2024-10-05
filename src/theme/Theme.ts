import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF885B",
      light: "#FFE5CF",
    },
    secondary: {
      main: "#557C56",
    },
    background: {
      default: "#33372C",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    fontSize: 14,
  },
});

export default theme;
