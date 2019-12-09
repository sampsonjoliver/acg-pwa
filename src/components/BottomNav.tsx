import React from 'react';
import {
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

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
          <BottomNavigationAction component={Link} to="/" label="Dashboard" />

          <BottomNavigationAction
            component={Link}
            to="/downloads"
            label="Downloads"
          ></BottomNavigationAction>

          <BottomNavigationAction
            component={Link}
            to="/settings"
            label="Settings"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
