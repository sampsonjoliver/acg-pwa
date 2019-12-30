import React from 'react';
import './App.css';
import { Auth0Provider } from './contexts/Auth0Provider';
import { ConfigProvider } from './contexts/ConfigProvider';
import { Router } from './components/Router';
import { BrowserRouter } from 'react-router-dom';

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
        <Router />
      </BrowserRouter>
    </Auth0Provider>
  );
};

export default ConfiguredApp;
