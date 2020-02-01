import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { VideoThumbnail } from './VideoThumbnail';

export const VideoUpNextList: React.FC = () => {
  return (
    <List style={{ overflowY: 'auto' }}>
      <ListItem button>
        <VideoThumbnail source="http://i3.ytimg.com/vi/vCpIpAGO708/maxresdefault.jpg" />
        <ListItemText primary="IAM 101" secondary="05:02 | 11MB" />
        <ListItemSecondaryAction>
          <ChevronRight />
        </ListItemSecondaryAction>
      </ListItem>

      <ListItem button>
        <VideoThumbnail source="http://i3.ytimg.com/vi/vCpIpAGO708/maxresdefault.jpg" />
        <ListItemText primary="IAM Lab" secondary="19:24 | 52MB" />
        <ListItemSecondaryAction>
          <ChevronRight />
        </ListItemSecondaryAction>
      </ListItem>

      <ListItem button>
        <VideoThumbnail source="http://i3.ytimg.com/vi/vCpIpAGO708/maxresdefault.jpg" />
        <ListItemText primary="IAM 101 summary" secondary="03:31 | 18MB" />
        <ListItemSecondaryAction>
          <ChevronRight />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
