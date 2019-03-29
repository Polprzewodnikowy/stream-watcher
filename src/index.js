import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { AppContextProvider } from './context/AppContext'
import { TwitchContextProvider } from './context/TwitchContext'
import App from './components/App'
import { Theme } from './Theme'
import * as serviceWorker from './serviceWorker'
import './index.css'

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <AppContextProvider>
      <TwitchContextProvider>
        <CssBaseline />
        <App />
      </TwitchContextProvider>
    </AppContextProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
)

serviceWorker.register()
