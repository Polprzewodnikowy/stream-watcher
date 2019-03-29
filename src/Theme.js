import { createMuiTheme } from '@material-ui/core'

export const Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#212121',
      light: '#484848',
      dark: '#000000',
    },
    secondary: {
      main: '#4a148c',
      light: '#7c43bd',
      dark: '#12005e',
    },
    background: {
      default: '#080808',
      paper: '#080808',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    }
  },
  typography: {
    useNextVariants: true,
  },
})
