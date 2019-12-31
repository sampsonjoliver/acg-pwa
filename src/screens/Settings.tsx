import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Container,
  makeStyles,
  Divider,
} from '@material-ui/core';
import WifiIcon from '@material-ui/icons/Wifi';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import ChevronRight from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export const Settings = () => {
  const styles = useStyles();

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flex="1 0 auto"
        padding={1}
        alignItems="center"
        flexDirection="column"
      >
        <Avatar className={styles.avatar}>SO</Avatar>
        <Typography component="h1" variant="h5">
          Sampson Oliver
        </Typography>
        <Box width="100%">
          <List subheader={<ListSubheader>Settings</ListSubheader>}>
            <ListItem>
              <ListItemIcon>
                <WifiIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-wifi">
                Wifi-only Downloads
              </ListItemText>
              <ListItemSecondaryAction>
                <Switch edge="end" />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem button onClick={() => console.log('In progress')}>
              <ListItemIcon>
                <NotificationsActive />
              </ListItemIcon>
              <ListItemText id="switch-list-label-wifi">
                Notifications
              </ListItemText>
              <ListItemSecondaryAction style={{ display: 'flex' }}>
                <Box display="flex">
                  <Divider orientation="vertical" />
                  <Switch edge="end" />
                </Box>
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem button onClick={() => console.log('In progress')}>
              <ListItemIcon>
                <NotificationsActive />
              </ListItemIcon>
              <ListItemText id="switch-list-label-wifi">
                Playback Settings
              </ListItemText>
              <ListItemSecondaryAction>
                <ChevronRight />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem button onClick={() => console.log('In progress')}>
              <ListItemIcon>
                <NotificationsActive />
              </ListItemIcon>
              <ListItemText id="switch-list-label-wifi">Logout</ListItemText>
              <ListItemSecondaryAction>
                <ChevronRight />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
};
