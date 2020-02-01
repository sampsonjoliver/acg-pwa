import React from 'react';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import { CourseOverview } from '../models/course/type';
import { Link } from './Link';
import { Image } from 'cloudinary-react';

export const CourseTile: React.FC<{ course: CourseOverview }> = ({
  course,
}) => {
  return (
    <GridListTile
      style={{
        width: '224px',
        height: '224px',
      }}
    >
      <Link to={`/course/${course.url}`}>
        <Image
          style={{ height: '100%' }}
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
        <GridListTileBar title={course.title} />
      </Link>
    </GridListTile>
  );
};
