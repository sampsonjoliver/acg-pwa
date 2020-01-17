import React, { useState } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  Container,
} from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const VideoPlayer: React.FC<{}> = ({}) => {
  return (
    <Dialog fullScreen open={true} TransitionComponent={Transition as any}>
      <AppBar style={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="close">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Video Player</Typography>
        </Toolbar>
      </AppBar>
      <Container fixed></Container>
    </Dialog>
  );
};
