import React from 'react';
import { Dialog, Box } from '@material-ui/core';
import ReactPlayer from 'react-player';

import { Screen, ScreenContent } from '../components/Screen';
import { AppBar } from '../components/AppBar';
import { SlideTransition } from '../components/SlideTransition';
import { VideoTabs } from '../components/VideoTabs';

export const VideoPlayer: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <Dialog fullScreen open={open} TransitionComponent={SlideTransition}>
      <Screen>
        <AppBar title="Video Player" showBack />
        <ScreenContent offsetAppbar>
          <Box
            pt={`${calculateAspectRatio(1280, 720)}%`}
            position="relative"
            bgcolor="black"
          >
            <ReactPlayer
              url="https://www.youtube.com/watch?v=oUFJJNQGwhk"
              style={{ position: 'absolute', top: 0, left: 0 }}
              width="100%"
              height="100%"
            />
          </Box>
          <VideoTabs />
        </ScreenContent>
      </Screen>
    </Dialog>
  );
};

const calculateAspectRatio = (width: number, height: number) => {
  return (height / width) * 100;
};
