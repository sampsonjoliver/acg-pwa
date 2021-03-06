import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Dialog,
  ListSubheader,
  Checkbox,
  Divider,
  Container,
} from '@material-ui/core';

import { AppBar } from '../components/AppBar';
import { ScreenContent, Screen } from '../components/Screen';
import { SlideTransition } from '../components/SlideTransition';

const notificationSettings = [
  {
    type: 'subheader',
    text: 'AWS',
  },
  {
    type: 'option',
    text: 'AWS This Week',
  },
  {
    type: 'option',
    text: 'Alexa Devs',
  },
  {
    type: 'option',
    text: 'Release Review',
  },
  {
    type: 'subheader',
    text: 'Azure',
  },
  {
    type: 'option',
    text: 'Azure This Week',
  },
  {
    type: 'option',
    text: 'GCP Fireside Chats',
  },
  {
    type: 'subheader',
    text: 'GCP',
  },
  {
    type: 'option',
    text: 'GCP This Month',
  },
  {
    type: 'subheader',
    text: 'Multicloud',
  },
  {
    type: 'option',
    text: 'ACG Labs and Projects',
  },

  {
    type: 'option',
    text: 'Future of Tech',
  },
];

export const NotificationSettings: React.FC<{
  open: boolean;
}> = ({ open }) => {
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);
  const [notificationSettingsValues, setNotificationSettings] = useState<{
    [key: string]: boolean;
  }>({});

  return (
    <Dialog fullScreen open={open} TransitionComponent={SlideTransition}>
      <Screen>
        <AppBar title="Notification Settings" showBack />
        <ScreenContent offsetAppbar>
          <Container fixed>
            <List>
              <ListItem
                button
                onClick={() => setNotificationsEnabled(!isNotificationsEnabled)}
              >
                <ListItemText
                  primary="Turn on Notifications?"
                  secondary="Receive notifications when new content gets added"
                ></ListItemText>
                <ListItemSecondaryAction>
                  <Switch
                    edge="end"
                    checked={isNotificationsEnabled}
                    onChange={(event, checked) =>
                      setNotificationsEnabled(checked)
                    }
                  />
                </ListItemSecondaryAction>
              </ListItem>

              <Divider />
              <Divider />

              {notificationSettings.map((it, index) => {
                if (it.type === 'subheader') {
                  return <ListSubheader disableSticky>{it.text}</ListSubheader>;
                }
                return (
                  <ListItem
                    disabled={!isNotificationsEnabled}
                    key={index}
                    button
                    onClick={() => {
                      setNotificationSettings({
                        ...notificationSettingsValues,
                        ...{
                          [it.text]: !notificationSettingsValues[it.text],
                        },
                      });
                    }}
                  >
                    <ListItemText primary={it.text} />
                    <ListItemSecondaryAction>
                      <Checkbox
                        disabled={!isNotificationsEnabled}
                        edge="end"
                        onChange={(event, checked) => {
                          setNotificationSettings({
                            ...notificationSettingsValues,
                            ...{ [it.text]: checked },
                          });
                        }}
                        checked={!!notificationSettingsValues[it.text]}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </Container>
        </ScreenContent>
      </Screen>
    </Dialog>
  );
};
