import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../screens/Dashboard';
import { Downloads } from '../screens/Downloads';
import { Settings } from '../screens/Settings';
import { Screen } from './Screen';
import { AppBar } from './AppBar';
import { Fade, Box } from '@material-ui/core';

export const Router: React.FC = () => {
  return (
    <Screen height="100vh" display="flex" flexDirection="column">
      <AppBar />
      <Route path="/downloads">
        {({ match }) => (
          <Fade in={match != null} unmountOnExit>
            <Box position="absolute" width="100vw" mt="64px">
              <Downloads />
            </Box>
          </Fade>
        )}
      </Route>
      <Route path="/settings">
        {({ match }) => (
          <Fade in={match != null} unmountOnExit>
            <Box position="absolute" width="100vw" mt="64px">
              <Settings />
            </Box>
          </Fade>
        )}
        <Settings />
      </Route>
      <Route path="/" exact>
        {({ match }) => (
          <Fade in={match != null} unmountOnExit>
            <Box position="absolute" width="100vw" mt="64px">
              <Dashboard />
            </Box>
          </Fade>
        )}
      </Route>
    </Screen>
  );
};
