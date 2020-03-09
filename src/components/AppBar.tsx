import React from 'react';
import {
  Toolbar,
  AppBar as MuiAppBar,
  Typography,
  Box,
  IconButton,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';

type Props = {
  title?: string;
  showBack?: boolean;
  backIcon?: () => JSX.Element;
};

export const AppBar: React.FC<Props> = ({
  title,
  showBack,
  backIcon,
  children,
}) => {
  const history = useHistory();

  const BackIcon = backIcon ?? (() => <ArrowBackIcon />);

  return (
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
              <BackIcon />
            </IconButton>
          )}
          {title && (
            <Box flexGrow={1}>
              <Typography variant="h6">{title}</Typography>
            </Box>
          )}
          {children}
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};
