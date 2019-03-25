import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import App from './App';
import { ContextProvider } from './ContextProvider';
import { Theme } from './Theme';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <CssBaseline />
    <ContextProvider>
      <App />
    </ContextProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

serviceWorker.register();
