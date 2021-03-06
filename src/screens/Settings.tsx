import React, { useState } from 'react';
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

import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import TuneIcon from '@material-ui/icons/Tune';
import LockIcon from '@material-ui/icons/Lock';
import WifiIcon from '@material-ui/icons/Wifi';
import AddPhotoIcon from '@material-ui/icons/AddAPhoto';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SubjectIcon from '@material-ui/icons/Subject';
import PolicyIcon from '@material-ui/icons/Policy';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

import { routes } from '../components/MainStackRouter';
import { useAuth0 } from '../contexts/Auth0Provider';
import { PlaybackSettings } from './PlaybackSettings';
import { NotificationSettings } from './NotificationSettings';

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
  const isPlaybackSettingsOpen = useRouteMatch(routes.playbackSettings);
  const isNotificationSettingsOpen = useRouteMatch(routes.notificationSettings);

  const [isWifiDownloadsOnly, setWifiDownloadsOnly] = useState(false);
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);

  const styles = useStyles();
  const auth = useAuth0();

  return (
    <Container fixed>
      <Box
        display="flex"
        pt={3}
        px={[0, 0, 3]}
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
          {auth.user?.userId || 'Anonymous User'}
        </Typography>

        <PlaybackSettings open={!!isPlaybackSettingsOpen} />

        <NotificationSettings open={!!isNotificationSettingsOpen} />

        <Box width="100%">
          <List
            subheader={<ListSubheader disableSticky>Settings</ListSubheader>}
          >
            <ListItem
              button
              onClick={() => setWifiDownloadsOnly(!isWifiDownloadsOnly)}
            >
              <ListItemIcon>
                <WifiIcon />
              </ListItemIcon>
              <ListItemText
                primary="Wifi-only Downloads"
                secondary="Disable cellular downloads to prevent nasty bill shock"
              ></ListItemText>
              <ListItemSecondaryAction>
                <Switch
                  edge="end"
                  checked={isWifiDownloadsOnly}
                  onChange={(event, checked) => setWifiDownloadsOnly(checked)}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem
              button
              component={Link as any}
              to={(location: Location) => {
                const params = new URLSearchParams(location.search);
                const newParams = new URLSearchParams();
                newParams.append('screen', params.get('screen') ?? '');

                return {
                  ...location,
                  pathname: routes.notificationSettings,
                  search: newParams.toString(),
                };
              }}
            >
              <ListItemIcon>
                <NotificationsActive />
              </ListItemIcon>
              <ListItemText
                primary="Notifications"
                secondary="Receive notifications when new content gets added"
              />
              <ListItemSecondaryAction style={{ display: 'flex' }}>
                <Box display="flex">
                  <Divider orientation="vertical" />
                  <Switch
                    edge="end"
                    checked={isNotificationsEnabled}
                    onChange={(event, checked) =>
                      setNotificationsEnabled(checked)
                    }
                  />
                </Box>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem
              button
              component={Link as any}
              to={(location: Location) => {
                const params = new URLSearchParams(location.search);
                const newParams = new URLSearchParams();
                newParams.append('screen', params.get('screen') ?? '');

                return {
                  ...location,
                  pathname: routes.playbackSettings,
                  search: newParams.toString(),
                };
              }}
            >
              <ListItemIcon>
                <TuneIcon />
              </ListItemIcon>
              <ListItemText
                primary="Playback Settings"
                secondary="Configure your playback options, such as default playback speed"
              />

              <ListItemSecondaryAction>
                <ChevronRight />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem button onClick={() => console.log('In progress')}>
              <ListItemIcon>
                <FeedbackIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-feedback">
                Send Feedback
              </ListItemText>
              <ListItemSecondaryAction>
                <OpenInNewIcon color="disabled" />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem button onClick={() => console.log('In progress')}>
              <ListItemIcon>
                <ContactSupportIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-support">
                Help and Support
              </ListItemText>
              <ListItemSecondaryAction>
                <OpenInNewIcon color="disabled" />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem button onClick={() => console.log('In progress')}>
              <ListItemIcon>
                <SubjectIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-terms">
                Terms of Use
              </ListItemText>
              <ListItemSecondaryAction>
                <OpenInNewIcon color="disabled" />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem button onClick={() => console.log('In progress')}>
              <ListItemIcon>
                <PolicyIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-policy">
                Privacy Policy
              </ListItemText>
              <ListItemSecondaryAction>
                <OpenInNewIcon color="disabled" />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem button onClick={() => auth.logout()}>
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-logout">Logout</ListItemText>
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
