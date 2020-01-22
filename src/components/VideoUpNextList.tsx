import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import ChevronRight from '@material-ui/icons/ChevronRight';

export const VideoUpNextList: React.FC = () => {
  return (
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
  );
};
