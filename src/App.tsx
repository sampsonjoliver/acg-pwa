import React from 'react';
import './App.css';
import { Auth0Provider } from './contexts/Auth0Provider';
import { ConfigProvider } from './contexts/ConfigProvider';
import { Router } from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';
import { CssBaseline } from '@material-ui/core';

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
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </Auth0Provider>
  );
};

export default ConfiguredApp;
