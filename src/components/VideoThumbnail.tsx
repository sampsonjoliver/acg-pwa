import React from 'react';
import { Image } from 'cloudinary-react';
import { Box, makeStyles } from '@material-ui/core';
import { useTimeout } from 'react-use';

const useStyles = makeStyles(theme => {
  return {
    thumb: {
      height: '45px',
      width: '80px',
      marginRight: theme.spacing(2),
      background: '#000',
    },
  };
});

export const VideoThumbnail: React.FC<{ source: string; alt?: string }> = ({
  source,
  alt,
}) => {
  const styles = useStyles();
  const [isReady] = useTimeout(500);

  return isReady() ? (
    <Image
      className={styles.thumb}
      width="80"
      height="45"
      crop="scale"
      type="fetch"
      publicId={source}
      alt={alt}
      crossOrigin="anonymous"
      quality="0.4"
      fetchFormat="auto"
    />
  ) : (
    <div className={styles.thumb} />
  );
};
