import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import store from 'store';
import { theme } from 'theme';
import { Layout } from 'layout';
import { TwitchViewContainer } from 'twitch';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <TwitchViewContainer />
      </Layout>
    </ThemeProvider>
  </Provider>
);

export default App;
