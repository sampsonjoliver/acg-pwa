import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../screens/Dashboard';
import { Downloads } from '../screens/Downloads';
import { Settings } from '../screens/Settings';
import { Screen } from './Screen';
import { AppBar } from './AppBar';
import { BottomNav } from '../components/BottomNav';
import { colours } from '../theme';

import { Fade, Box } from '@material-ui/core';

export const Router: React.FC = () => {
  return (
    <Screen height="100vh" display="flex" flexDirection="column">
      <Box
          bgcolor={colours.navy600}
          height="100vh"
          width="100vw"
          position="fixed"
          zIndex={-100}
        />
        <AppBar />
      <Route path="/downloads">
        {({ match }) => (
          <Fade in={match != null} unmountOnExit>
            <Box position="absolute" width="100vw" mt="64px" pb="56px">
              <Downloads />
            </Box>
          </Fade>
        )}
      </Route>
      <Route path="/settings">
        {({ match }) => (
          <Fade in={match != null} unmountOnExit>
            <Box position="absolute" width="100vw" mt="64px" pb="56px">
              <Settings />
            </Box>
          </Fade>
        )}
      </Route>
      <Route path="/" exact>
        {({ match }) => (
          <Fade in={match != null} unmountOnExit>
            <Box position="absolute" width="100vw" mt="64px" pb="56px">
              <Dashboard />
            </Box>
          </Fade>
        )}
      </Route>
      <BottomNav />

    </Screen>
  );
};
