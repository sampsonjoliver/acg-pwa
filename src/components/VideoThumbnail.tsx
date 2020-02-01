import React from 'react';
import { Image } from 'cloudinary-react';
import { Box } from '@material-ui/core';

export const VideoThumbnail: React.FC<{ source: string; alt?: string }> = ({
  source,
  alt,
}) => (
  <Box height="45px" width="80px" mr={2}>
    <Image
      style={{ height: '100%' }}
      width="auto"
      dpr="auto"
      crop="scale"
      type="fetch"
      publicId={source}
      responsive
      responsiveUseBreakpoints="true"
      alt={alt}
      crossOrigin="anonymous"
    />
  </Box>
);
