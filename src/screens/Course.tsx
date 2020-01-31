import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { AppBar } from '../components/AppBar';
import { Image } from 'cloudinary-react';
import { useCourse } from '../hooks/useCourse';

type Props = {
  courseId: string;
};

export const CourseScreen: React.FC<Props> = props => {
  const res = useCourse(props.courseId);
  if (res.loading) {
    return null;
  }
  const course = res.data?.courseOverview!;

  return (
    <Box height="calc(100vh - 130px)" alignItems="center" display="flex">
      <AppBar title={''} showBack>
        <Box>
          <Box flexDirection="row">
            <Image
              style={{ height: '120px' }}
              width="auto"
              dpr="auto"
              crop="scale"
              type="fetch"
              publicId={course.artworkUrl}
              responsive
              responsiveUseBreakpoints="true"
              alt={course.title}
              crossOrigin="anonymous"
            />

            <Typography>{course.title}</Typography>
          </Box>
        </Box>
      </AppBar>
      <Box>
        <Typography>Content weewwww!</Typography>
      </Box>
    </Box>
  );
};
