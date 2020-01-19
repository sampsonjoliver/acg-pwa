import React from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';

export const Screen: React.FC<BoxProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};
