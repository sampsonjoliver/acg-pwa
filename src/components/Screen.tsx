import React from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';

import { colours } from '../theme';

const Background = () => (
  <Box
    bgcolor={colours.navy600}
    height="100vh"
    width="100vw"
    position="fixed"
    zIndex={-100}
  />
);

export const Screen: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box {...props}>
      <Background />
      {children}
    </Box>
  );
};
