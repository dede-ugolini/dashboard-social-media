import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "hsl(163, 72%, 41%)",
    },
    secondary: {
      main: "hsl(356, 69%, 56%)",
    },
    background: {
      default: "hsl(0, 100%, 100%)",
      paper: "hsl(227, 47%, 96%)",
      header: "hsl(225, 100%, 98%)",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    caption: {
      color: "hsl(163, 72%, 41%)",
      fontWeight: "bold",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          textAlign: "center",
          flex: 1,
        }
      }
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "hsl(163, 72%, 41%)",
    },
    secondary: {
      main: "hsl(208, 92%, 53%)",
    },
    background: {
      default: "hsl(230, 17%, 14%)",
      paper: "hsl(228, 28%, 20%)",
      header: "hsl(232, 19%, 15%)",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    caption: {
      color: "hsl(163, 72%, 41%)",
      fontWeight: "bold",
    },
    body2: {
      color: "hsl(230, 22%, 74%)",
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          textAlign: "center",
          flex: 1,
        }
      }
    }
  }
});


