import React from 'react';
import './App.css';
import { Screen } from './components/Screen';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from '@material-ui/core';
import { Auth0Provider } from './contexts/Auth0Provider';
import { makeConfig } from './util/config';
import { Dashboard } from './screens/Dashboard';

const App: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const config = makeConfig();

  return (
    <Auth0Provider
      client_id={config.auth0.clientId}
      domain={config.auth0.clientDomain}
      redirect_uri={config.auth0.clientRedirectUri}
      onRedirectCallback={() => null}
    >
      <Screen height="100vh" display="flex" flexDirection="column">
        <Dashboard />
        <Box position="fixed" bottom={0} width="100%">
          <Paper elevation={8}>
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              showLabels
            >
              <BottomNavigationAction label="Recents" />
              <BottomNavigationAction label="Favorites" />
              <BottomNavigationAction label="Nearby" />
            </BottomNavigation>
          </Paper>
        </Box>
      </Screen>
    </Auth0Provider>
  );
};

export default App;
