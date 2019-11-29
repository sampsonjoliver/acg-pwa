import React from 'react';
import {
  Toolbar,
  AppBar as MuiAppBar,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import { useAuth0 } from '../contexts/Auth0Provider';

export const AppBar = () => {
  const auth = useAuth0();
  console.log({ auth });

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant="h6">Dashboard</Typography>
        </Box>
        {!auth.isAuthenticated && (
          <Button onClick={() => auth.loginWithRedirect()}>Login</Button>
        )}
        {auth.isAuthenticated && (
          <Button
            onClick={() => auth.logout({ returnTo: 'http://localhost:3000/' })}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </MuiAppBar>
  );
};
