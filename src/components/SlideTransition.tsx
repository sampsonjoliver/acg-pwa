import React from 'react';
import { Slide } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions/transition';

export const SlideTransition: React.ComponentType<TransitionProps> = React.forwardRef(
  (props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);
