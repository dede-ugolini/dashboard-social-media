import { createTheme } from "@mui/material";

const theme = createTheme();

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
    h2: {
      [theme.breakpoints.up('xs')]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.up('md')]: {
        fontSize: "3.0rem",
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: "3.5rem",
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: "5rem",
      },
    },

    h3: {
      [theme.breakpoints.up('xs')]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up('md')]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: "2.3rem",
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: "3rem",
      },
    },

    h5: {
      color: "hsl(228, 12%, 44%)",
    },

    body2: {
      fontSize: "1.5rem",
      color: "hsl(228, 12%, 44%)",
      [theme.breakpoints.up('xs')]: {
        fontSize: '0.7rem',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '0.8rem'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.0rem',
      },
    },

    caption: {
      color: "hsl(163, 72%, 41%)",
      fontWeight: "bold",
      fontSize: "1.5rem",
      [theme.breakpoints.up('xs')]: {
        fontSize: '0.6rem',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '0.7rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '0.9rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.1rem',
      },
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
      main: "hsl(356, 69%, 56%)",
    },
    background: {
      default: "hsl(230, 17%, 14%)",
      paper: "hsl(228, 28%, 20%)",
      header: "hsl(232, 19%, 15%)",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",

    h2: {
      [theme.breakpoints.up('xs')]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.up('md')]: {
        fontSize: "3.0rem",
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: "3.5rem",
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: "5rem",
      },
    },

    h3: {
      [theme.breakpoints.up('xs')]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up('md')]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: "2.3rem",
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: "3rem",
      },
    },

    body2: {
      color: "hsl(230, 22%, 74%)",
      fontSize: "1.5rem",
      [theme.breakpoints.up('xs')]: {
        fontSize: '0.7rem',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '0.8rem'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.0rem',
      },
    },

    caption: {
      color: "hsl(163, 72%, 41%)",
      fontWeight: "bold",
      fontSize: "1.5rem",
      [theme.breakpoints.up('xs')]: {
        fontSize: '0.6rem',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '0.7rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '0.9rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.1rem',
      },
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
    }
  }
});
