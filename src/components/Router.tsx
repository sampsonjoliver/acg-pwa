import React from 'react';
import { Fade, Box } from '@material-ui/core';

import { Screen } from './Screen';
import { AppBar } from './AppBar';
import { BottomNav } from './BottomNav';
import { Dashboard } from '../screens/Dashboard';
import { Downloads } from '../screens/Downloads';
import { Settings } from '../screens/Settings';

import { useNavigator } from '../hooks/useNavigator';

export const Router: React.FC = () => {
  const match = useNavigator();

  return (
    <Screen height="100vh" display="flex" flexDirection="column">
      <AppBar title={match.title} />

      <Fade in={match.index === 0} unmountOnExit>
        <Box position="absolute" width="100vw" mt="64px" pb="56px">
          <Dashboard />
        </Box>
      </Fade>

      <Fade in={match.index === 1} unmountOnExit>
        <Box position="absolute" width="100vw" mt="64px" pb="56px">
          <Downloads />
        </Box>
      </Fade>

      <Fade in={match.index === 2} unmountOnExit>
        <Box position="absolute" width="100vw" mt="64px" pb="56px">
          <Settings />
        </Box>
      </Fade>

      <BottomNav index={match.index} />
    </Screen>
  );
};
