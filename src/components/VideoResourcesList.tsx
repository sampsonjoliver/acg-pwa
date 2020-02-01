import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

export const VideoResourcesList: React.FC = () => {
  return (
    <List style={{ overflowY: 'auto' }}>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>1</Avatar>
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{ noWrap: true, component: 'p' }}
          secondaryTypographyProps={{ noWrap: true }}
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
          primaryTypographyProps={{ noWrap: true, component: 'p' }}
          secondaryTypographyProps={{ noWrap: true }}
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
          primaryTypographyProps={{ noWrap: true, component: 'p' }}
          secondaryTypographyProps={{ noWrap: true }}
          primary="Creating a free tier billing alert"
          secondary="https://aws.amazon.com/about-aws/whats-new/2017/12"
        />
        <ListItemSecondaryAction>
          <OpenInNewIcon />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
