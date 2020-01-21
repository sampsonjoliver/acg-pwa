import React from 'react';
import {
  Toolbar,
  AppBar as MuiAppBar,
  Typography,
  Box,
  Button,
  IconButton,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';

import { useAuth0 } from '../contexts/Auth0Provider';
import { useConfig } from '../contexts/ConfigProvider';

export const AppBar: React.FC<{ title: string; showBack?: boolean }> = ({
  title,
  showBack,
  children,
}) => {
  const auth = useAuth0();
  const config = useConfig();

  const history = useHistory();

  return (
    <>
      <Box position="fixed" top={0} width="100%" zIndex={100}>
        <MuiAppBar position="static">
          <Toolbar>
            {showBack && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="close"
                onClick={() => {
                  history.goBack();
                }}
              >
                <ArrowBackIcon />
              </IconButton>
            )}
            <Box flexGrow={1}>
              <Typography variant="h6">{title}</Typography>
            </Box>
            {children}
            {!auth.isAuthenticated && (
              <Button
                onClick={() =>
                  auth.login({
                    redirectUri: config.auth0.clientRedirectUri,
                  })
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
      <Box height="64px" />
    </>
  );
};
