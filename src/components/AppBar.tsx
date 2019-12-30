import React from 'react';
import {
  Toolbar,
  AppBar as MuiAppBar,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import { useAuth0 } from '../contexts/Auth0Provider';
import { useConfig } from '../contexts/ConfigProvider';

export const AppBar = () => {
  const auth = useAuth0();
  const config = useConfig();

  return (
    <Box position="fixed" top={0} width="100%" zIndex={100}>
    <MuiAppBar position="static">
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant="h6">Dashboard</Typography>
        </Box>
        {!auth.isAuthenticated && (
          <Button
            onClick={() =>
              auth.login({ redirectUri: config.auth0.clientRedirectUri })
            }
          >
            Login
          </Button>
        )}
        {auth.isAuthenticated && (
          <Button
            onClick={() =>
              auth.logout({ returnTo: config.auth0.logoutReturnTo })
            }
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </MuiAppBar>
    </Box>
  );
};
