import React from 'react';
import {
  Box,
  Typography,
  makeStyles,
  Avatar,
  Container,
} from '@material-ui/core';
import DownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles(theme => ({
  icon: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  iconContainer: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
}));

export const Downloads = () => {
  const styles = useStyles();

  return (
    <Box
      height="calc(100vh - 130px)"
      padding={3}
      alignItems="center"
      display="flex"
    >
      <Container maxWidth="xs">
        <Box display="flex" alignItems="center" flexDirection="column">
          <Avatar className={styles.iconContainer}>
            <DownloadIcon className={styles.icon} />
          </Avatar>
          <Typography component="h1" variant="h6">
            No downloads yet!
          </Typography>
          <Box pt={1} />
          <Typography component="p" variant="caption" align="center">
            Videos you've download will appear here. Look for the download icon
            or the Download All button.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
