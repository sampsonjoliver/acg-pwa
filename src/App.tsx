import React from 'react';
import './App.css';
import { Auth0Provider } from './contexts/Auth0Provider';
import { Dashboard } from './screens/Dashboard';
import { ConfigProvider, useConfig } from './contexts/ConfigProvider';
import { BottomNav } from './components/BottomNav';

const ConfiguredApp: React.FC = () => {
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
};

const App: React.FC = () => {
  const config = useConfig();

  return (
    <Auth0Provider
      client_id={config.auth0.clientId}
      domain={config.auth0.clientDomain}
      redirect_uri={config.auth0.clientRedirectUri}
      onRedirectCallback={() => null}
    >
      <Dashboard />
      <BottomNav />
    </Auth0Provider>
  );
};

export default ConfiguredApp;
