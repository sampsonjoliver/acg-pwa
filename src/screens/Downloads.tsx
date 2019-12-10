import React from 'react';

import {
  Box,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
} from '@material-ui/core';
import { AppBar } from '../components/AppBar';
import { Screen } from '../components/Screen';

export const Downloads = () => {
  return (
    <Box flex="1 0 auto" padding={1} pb="56px">
      <Box mb={2}>
        <Typography component="h1" variant="h3" color="secondary">
          Downloads
        </Typography>
      </Box>
    </Box>
  );
};
