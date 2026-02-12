import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  mode: "light",
  palette: {
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
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          textAlign: "center",
        }
      }
    }

  }
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
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          textAlign: "center",
        }
      }
    }
  }
});


