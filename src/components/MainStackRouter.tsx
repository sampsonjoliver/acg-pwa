import React from 'react';
import { Fade, Box } from '@material-ui/core';

import { Screen } from './Screen';
import { AppBar } from './AppBar';
import { BottomNav } from './BottomNav';
import { Dashboard } from '../screens/Dashboard';
import { Downloads } from '../screens/Downloads';
import { Settings } from '../screens/Settings';

import { useLocation, useHistory, useRouteMatch } from 'react-router';
import { VideoPlayer } from '../screens/VideoPlayer';

export const useParams = () => {
  return new URLSearchParams(useLocation().search);
};

export type NavigatorScreenStack = 'dashboard' | 'downloads' | 'settings';
export type Routes = keyof typeof routes;
export const routes = {
  video: '/video',
  playbackSettings: '/playbackSettings',
  notificationSettings: '/notificationSettings',
};

export const useMainStackNavigator = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();

  const activeScreenStack = params.get('screen') ?? 'dashboard';

  const screens: NavigatorScreenStack[] = [
    'dashboard',
    'downloads',
    'settings',
  ];
  const matchedIndex = screens.findIndex(
    screenStack => screenStack === activeScreenStack
  );
  const titles = ['Dashboard', 'Downloads', 'Settings'];

  const navigateTo = (screenStack: NavigatorScreenStack) => {
    params.set('screen', screenStack);
    return history.replace({ ...location, search: params.toString() });
  };

  return {
    screen: activeScreenStack,
    index: matchedIndex,
    title: titles[matchedIndex],
    navigateTo,
  };
};

export const MainStackRouter: React.FC = () => {
  const match = useMainStackNavigator();
  const videoMatch = useRouteMatch('/video');

  return (
    <Screen>
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

      <BottomNav />

      <VideoPlayer open={!!videoMatch} />
    </Screen>
  );
};
