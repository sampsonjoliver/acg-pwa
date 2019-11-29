import React from 'react';
import {
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';

export const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  return (
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
  );
};
