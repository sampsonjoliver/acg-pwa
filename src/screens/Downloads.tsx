import React from 'react';
import { Box, Typography } from '@material-ui/core';

export const Downloads = () => {
  return (
    <Box flex="1 0 auto" padding={1}>
      <Box mb={2}>
        <Typography component="h1" variant="h3" color="secondary">
          Downloads
        </Typography>
      </Box>
    </Box>
  );
};
