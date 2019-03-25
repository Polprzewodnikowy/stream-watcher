import { createMuiTheme } from "@material-ui/core";

export const Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#000000',
      paper: '#111111',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    }
  },
  typography: {
    useNextVariants: true
  }
});
