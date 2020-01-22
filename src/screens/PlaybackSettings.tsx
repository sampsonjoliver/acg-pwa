import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Dialog,
  Container,
} from '@material-ui/core';

import { AppBar } from '../components/AppBar';
import { ScreenContent, Screen } from '../components/Screen';
import { SlideTransition } from '../components/SlideTransition';
import { MultiSelectMenuItem } from '../components/MultiSelectMenuItem';

const playbackOptions = [
  '0.8x speed',
  '1x speed',
  '1.2x speed',
  '1.5x speed',
  '2x speed',
];

const skipOptions = [
  '5 seconds',
  '10 seconds',
  '15 seconds',
  '30 seconds',
  '45 seconds',
  '60 seconds',
  '90 seconds',
];

export const PlaybackSettings: React.FC<{
  open: boolean;
}> = ({ open }) => {
  const [isContinuousPlayback, setContinuousPlayback] = useState(false);

  return (
    <Dialog fullScreen open={open} TransitionComponent={SlideTransition}>
      <Screen>
        <AppBar title="Playback Settings" showBack />
        <ScreenContent offsetAppbar>
          <Container fixed>
            <List>
              <ListItem
                button
                onClick={() => setContinuousPlayback(!isContinuousPlayback)}
              >
                <ListItemText
                  primary="Continuous Play"
                  secondary={`When a video ends, the next video will ${
                    isContinuousPlayback ? 'not ' : ''
                  }automatically start`}
                ></ListItemText>
                <ListItemSecondaryAction>
                  <Switch
                    edge="end"
                    checked={isContinuousPlayback}
                    onChange={(event, checked) =>
                      setContinuousPlayback(checked)
                    }
                  />
                </ListItemSecondaryAction>
              </ListItem>

              <MultiSelectMenuItem
                options={playbackOptions}
                text="Playback Speed"
              />
              <MultiSelectMenuItem options={skipOptions} text="Skip Back" />
              <MultiSelectMenuItem options={skipOptions} text="Skip Forward" />
            </List>
          </Container>
        </ScreenContent>
      </Screen>
    </Dialog>
  );
};
