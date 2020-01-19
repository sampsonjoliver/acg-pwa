import React, { useState } from 'react';
import { Snackbar, Grow, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { useServiceWorkerHasUpdate } from '../contexts/ServiceWorker';

const GrowTransition: React.FC = props => {
  return <Grow {...props} />;
};

export const ServiceWorkerUpdateToast: React.FC = () => {
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);
  const hasUpdate = useServiceWorkerHasUpdate();

  const handleClose = () => setHasBeenDismissed(true);
  const handleRefresh = () => window.location.reload();

  return (
    <Snackbar
      open={hasUpdate && !hasBeenDismissed}
      onClose={handleClose}
      TransitionComponent={GrowTransition}
      message="A new update is available. Click here to get it!"
      action={
        <>
          <Button color="secondary" size="small" onClick={handleRefresh}>
            REFRESH
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
};
