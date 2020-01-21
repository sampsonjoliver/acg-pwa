import React from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';

export const Screen: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box height="100vh" display="flex" flexDirection="column" {...props}>
      {children}
    </Box>
  );
};
