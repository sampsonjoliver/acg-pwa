import React from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';
import { Toolbar } from '@material-ui/core';

export const Screen: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      flexDirection="column"
      {...props}
    >
      {children}
    </Box>
  );
};

type Props = BoxProps & {
  offsetAppbar?: boolean;
};

export const ScreenContent: React.FC<Props> = ({
  children,
  offsetAppbar,
  ...props
}) => {
  return (
    <Box width="100vw" display="flex" flexDirection="column" {...props}>
      {offsetAppbar && <Toolbar />}
      {children}
    </Box>
  );
};
