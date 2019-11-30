import React from 'react';
import './App.css';
import { Auth0Provider } from './contexts/Auth0Provider';
import { Dashboard } from './screens/Dashboard';
import { ConfigProvider } from './contexts/ConfigProvider';
import { BottomNav } from './components/BottomNav';

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
      <Dashboard />
      <BottomNav />
    </Auth0Provider>
  );
};

export default ConfiguredApp;
