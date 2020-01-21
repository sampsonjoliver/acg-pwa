import React from 'react';
import {
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import { useMainStackNavigator } from './MainStackRouter';

export const BottomNav: React.FC = () => {
  const navigator = useMainStackNavigator();
  const index = navigator.index;

  return (
    <Box position="fixed" bottom={0} width="100%">
      <Paper elevation={8}>
        <BottomNavigation value={index} showLabels>
          <BottomNavigationAction
            onClick={() => navigator.navigateTo('dashboard')}
            label="Dashboard"
          />

          <BottomNavigationAction
            onClick={() => navigator.navigateTo('downloads')}
            label="Downloads"
          />

          <BottomNavigationAction
            onClick={() => navigator.navigateTo('settings')}
            label="Settings"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
