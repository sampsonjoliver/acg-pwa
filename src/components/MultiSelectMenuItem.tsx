import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
} from '@material-ui/core';
import ChevronRight from '@material-ui/icons/ChevronRight';

export const MultiSelectMenuItem: React.FC<{
  options: string[];
  text: string;
}> = ({ options, text }) => {
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
