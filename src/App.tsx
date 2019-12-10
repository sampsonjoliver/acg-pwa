import React from 'react';
import './App.css';
import { Auth0Provider } from './contexts/Auth0Provider';
import { ConfigProvider } from './contexts/ConfigProvider';
import { BottomNav } from './components/BottomNav';
import { Router } from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { colours } from './theme';

const ConfiguredApp: React.FC = () => {
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
};

const App: React.FC = () => {
  return (
    <Auth0Provider onRedirectCallback={() => null}>
      <BrowserRouter>
        <Box
          bgcolor={colours.navy600}
          height="100vh"
          width="100vw"
          position="fixed"
          zIndex={-100}
        />
        <Router />
        <BottomNav />
      </BrowserRouter>
    </Auth0Provider>
  );
};

export default ConfiguredApp;
