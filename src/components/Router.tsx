import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Dashboard } from '../screens/Dashboard';
import { Downloads } from '../screens/Downloads';
import { Settings } from '../screens/Settings';
import { Screen } from './Screen';
import { AppBar } from './AppBar';
import { BottomNav } from '../components/BottomNav';
import { colours } from '../theme';

import { Fade, Box } from '@material-ui/core';

const Background = () => (
  <Box
    bgcolor={colours.navy600}
    height="100vh"
    width="100vw"
    position="fixed"
    zIndex={-100}
  />
);

export const Router: React.FC = () => {
  const dashboardMatch = useRouteMatch({
    path: '/',
    exact: true,
  });
  const downloadsMatch = useRouteMatch({
    path: '/downloads',
  });
  const settingsMatch = useRouteMatch({
    path: '/settings',
  });

  return (
    <Screen height="100vh" display="flex" flexDirection="column">
      <Background />
      <AppBar />

      <Fade in={downloadsMatch != null} unmountOnExit>
        <Box position="absolute" width="100vw" mt="64px" pb="56px">
          <Downloads />
        </Box>
      </Fade>

      <Fade in={settingsMatch != null} unmountOnExit>
        <Box position="absolute" width="100vw" mt="64px" pb="56px">
          <Settings />
        </Box>
      </Fade>

      <Fade in={dashboardMatch != null} unmountOnExit>
        <Box position="absolute" width="100vw" mt="64px" pb="56px">
          <Dashboard />
        </Box>
      </Fade>

      <BottomNav />
    </Screen>
  );
};
