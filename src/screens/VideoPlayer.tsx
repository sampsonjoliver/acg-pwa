import React, { useState } from 'react';
import {
  Dialog,
  Slide,
  Box,
  List,
  Tabs,
  Tab,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import ReactPlayer from 'react-player';

import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { Screen } from '../components/Screen';
import { AppBar } from '../components/AppBar';

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const VideoPlayer: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition as any}>
      <Screen>
        <AppBar title="Video Player" showBack />

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
      </Screen>
    </Dialog>
  );
};

const VideoTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Tabs
        variant="standard"
        value={activeTab}
        onChange={(event, newValue) => setActiveTab(newValue)}
      >
        <Tab label="Resources" />
        <Tab label="Up Next" />
      </Tabs>

      {activeTab === 0 && (
        <List style={{ overflowY: 'auto' }}>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>1</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="AWS - Set up a new account"
              secondary="https://aws.amazon.com"
            />
            <ListItemSecondaryAction>
              <OpenInNewIcon />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>2</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Creating a billing alert"
              secondary="https://aws.amazon.com/AmazonCloudWatch/latest"
            />
            <ListItemSecondaryAction>
              <OpenInNewIcon />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>3</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Creating a free tier billing alert"
              secondary="https://aws.amazon.com/about-aws/whats-new/2017/12"
            />
            <ListItemSecondaryAction>
              <OpenInNewIcon />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      )}
      {activeTab === 1 && (
        <List style={{ overflowY: 'auto' }}>
          <ListItem button>
            <Box height="40px" width="60px" mr={2}>
              <img
                width="100%"
                height="100%"
                src="http://i3.ytimg.com/vi/vCpIpAGO708/maxresdefault.jpg"
              />
            </Box>
            <ListItemText primary="IAM 101" secondary="05:02 | 11MB" />
            <ListItemSecondaryAction>
              <ChevronRight />
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem button>
            <Box height="40px" width="60px" mr={2}>
              <img
                width="100%"
                height="100%"
                src="http://i3.ytimg.com/vi/5eIj1nDUs9g/maxresdefault.jpg"
              />
            </Box>
            <ListItemText primary="IAM Lab" secondary="19:24 | 52MB" />
            <ListItemSecondaryAction>
              <ChevronRight />
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem button>
            <Box height="40px" width="60px" mr={2}>
              <img
                width="100%"
                height="100%"
                src="http://i3.ytimg.com/vi/gs3yYvFuJ2E/maxresdefault.jpg"
              />
            </Box>
            <ListItemText primary="IAM 101 summary" secondary="03:31 | 18MB" />
            <ListItemSecondaryAction>
              <ChevronRight />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      )}
    </>
  );
};

const calculateAspectRatio = (width: number, height: number) => {
  return (height / width) * 100;
};
