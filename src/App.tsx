import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import './App.css';

import { Auth0Provider } from './contexts/Auth0Provider';
import { ConfigProvider } from './contexts/ConfigProvider';
import { MainStackRouter } from './components/MainStackRouter';
import { ServiceWorkerProvider } from './contexts/ServiceWorker';
import { ServiceWorkerUpdateToast } from './components/ServiceWorkerUpdateToast';
import { apolloClient } from './util/apollo';

const ConfiguredApp: React.FC = () => {
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
};

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const App: React.FC = () => {
  return (
    <Auth0Provider onRedirectCallback={() => null}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <ServiceWorkerProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <MainStackRouter />
              <ServiceWorkerUpdateToast />
            </ThemeProvider>
          </ServiceWorkerProvider>
        </BrowserRouter>
      </ApolloProvider>
    </Auth0Provider>
  );
};

export default ConfiguredApp;
