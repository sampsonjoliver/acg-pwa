import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';

import { Link } from './Link';
import { Component, VideoComponentContent } from '../models/course/type';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { VideoThumbnail } from './VideoThumbnail';

export const VideoLessonRow: React.FC<{
  component: Component;
  content: VideoComponentContent;
}> = ({ children, component, content }) => {
  const durationText = `${content.duration}s`;
  const sizeText = formatFileSize(
    content.videosources ? content.videosources[0].filesize : 0
  );

  return (
    <Link to={`/video/${component.componentId}`}>
      <ListItem button>
        <VideoThumbnail source={content.videoposter} alt={component.title} />
        <ListItemText
          primary={component.title}
          secondary={`${durationText} | ${sizeText}`}
        />
        <ListItemSecondaryAction>
          <IconButton>
            <GetAppIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Link>
  );
};

const formatFileSize = (bytes: number, si: boolean = true) => {
  const thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }
  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);
  return bytes.toFixed(1) + ' ' + units[u];
};
