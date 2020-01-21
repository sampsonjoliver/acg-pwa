import React, { useState } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Dialog,
  Slide,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from '@material-ui/core';

import ChevronRight from '@material-ui/icons/ChevronRight';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { AppBar } from '../components/AppBar';

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

const MultiSelectMenuItem: React.FC<{ options: string[]; text: string }> = ({
  options,
  text,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLDivElement) | null
  >(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List component="nav">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          onClick={event => {
            setAnchorEl(event.currentTarget);
          }}
        >
          <ListItemText primary={text} secondary={options[selectedIndex]} />
          <ListItemSecondaryAction>
            <ChevronRight />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={event => {
              setSelectedIndex(index);
              setAnchorEl(null);
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const PlaybackSettings: React.FC<{
  open: boolean;
}> = ({ open }) => {
  const [isContinuousPlayback, setContinuousPlayback] = useState(false);

  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition as any}>
      <AppBar title="Playback Settings" showBack />
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
                onChange={(event, checked) => setContinuousPlayback(checked)}
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
    </Dialog>
  );
};
