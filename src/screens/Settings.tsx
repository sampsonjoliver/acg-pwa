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
  Badge,
  withStyles,
} from '@material-ui/core';

import TuneIcon from '@material-ui/icons/Tune';
import LockIcon from '@material-ui/icons/Lock';
import WifiIcon from '@material-ui/icons/Wifi';
import AddPhotoIcon from '@material-ui/icons/AddAPhoto';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { useAuth0 } from '../contexts/Auth0Provider';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const SmallAvatar = withStyles(theme => ({
  root: {
    width: 22,
    height: 22,
    left: '-2px',
    top: '-2px',
    backgroundColor: theme.palette.action.disabled,
  },
}))(Avatar);

const SmallIcon = withStyles(theme => ({
  root: {
    width: 12,
    height: 12,
  },
}))(AddPhotoIcon);

export const Settings = () => {
  const styles = useStyles();
  const auth = useAuth0();

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        padding={3}
        alignItems="center"
        flexDirection="column"
      >
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeContent={
            <SmallAvatar>
              <SmallIcon fontSize="small" />
            </SmallAvatar>
          }
        >
          <Avatar className={styles.avatar}>SO</Avatar>
        </Badge>
        <Box pt={1} />
        <Typography component="h1" variant="h5">
          {JSON.stringify(auth.user) || 'Anonymous User'}
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
                <TuneIcon />
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
                <LockIcon />
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
