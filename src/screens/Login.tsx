import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { useAuth0 } from '../contexts/Auth0Provider';
import { useConfig } from '../contexts/ConfigProvider';

export const Login: React.FC = () => {
  const auth = useAuth0();
  const config = useConfig();

  return (
    <Box
      height="calc(100vh)"
      padding={3}
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      display="flex"
    >
      <Typography variant="h3">Welcome to A Cloud Guru</Typography>
      <Button
        variant="contained"
        onClick={() =>
          auth.login({
            redirectUri: config.auth0.clientRedirectUri,
          })
        }
      >
        Get Started
      </Button>
    </Box>
  );
};
