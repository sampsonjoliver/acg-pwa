import React from 'react';
import {
  Box,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  Grow,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';

import { useUserCourses } from '../hooks/useUserCourses';
import { useCourse } from '../hooks/useCourse';
import { notUndefined } from '../util/notUndefined';
import { notNull } from '../util/notNull';

const SuggestedCoursesRow: React.FC = () => {
  const introCloudComputing = useCourse('intro-cloud-computing');
  const awsTechnicalEssentials = useCourse('intro-to-azure');
  const awsCloudPractitioner = useCourse('aws-certified-cloud-practitioner');
  const awsSolutionsArchitectAssoc = useCourse('gcp-101');

  if (
    introCloudComputing.loading ||
    awsTechnicalEssentials.loading ||
    awsCloudPractitioner.loading ||
    awsSolutionsArchitectAssoc.loading
  ) {
    return null;
  }

  const courses = [
    introCloudComputing.data?.courseOverview,
    awsTechnicalEssentials.data?.courseOverview,
    awsCloudPractitioner.data?.courseOverview,
    awsSolutionsArchitectAssoc.data?.courseOverview,
  ]
    .filter(notUndefined)
    .filter(notNull);

  return (
    <Box mb={2}>
      <Typography component="h2" variant="h4">
        Ready to try something new?
      </Typography>
      <GridList style={{ flexWrap: 'nowrap' }}>
        {courses.map((course, index) => (
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            timeout={650}
            key={index}
          >
            <GridListTile
              style={{
                width: '224px',
                height: '224px',
              }}
            >
              <Link
                to={location => {
                  const params = new URLSearchParams(location.search);
                  const newParams = new URLSearchParams();
                  newParams.append('screen', params.get('screen') ?? '');

                  return {
                    ...location,
                    pathname: `/course/${course.url}`,
                    search: newParams.toString(),
                  };
                }}
              >
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
          </Grow>
        ))}
      </GridList>
    </Box>
  );
};

const UserCoursesRow: React.FC = () => {
  const courses = useUserCourses();

  if (courses.loading || !courses.data?.userAccessibleCourses?.length) {
    return null;
  }

  return (
    <Box mb={2}>
      <Typography component="h2" variant="h4">
        Your Courses
      </Typography>
      <GridList style={{ flexWrap: 'nowrap' }}>
        {courses.loading && 'Loading'}
        {courses.data?.userAccessibleCourses.map((course, index) => (
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            timeout={650}
            key={index}
          >
            <GridListTile
              style={{
                width: '224px',
                height: '224px',
              }}
            >
              <Link
                to={location => {
                  const params = new URLSearchParams(location.search);
                  const newParams = new URLSearchParams();
                  newParams.append('screen', params.get('screen') ?? '');

                  return {
                    ...location,
                    pathname: `/course/${course.url}`,
                    search: newParams.toString(),
                  };
                }}
              >
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
          </Grow>
        ))}
      </GridList>
    </Box>
  );
};

export const Dashboard = () => {
  return (
    <Box flex="1 0 auto" padding={1}>
      <Box mb={2}>
        <Typography component="h1" variant="h3">
          Hello, Cloud Guru
        </Typography>
      </Box>

      <UserCoursesRow />
      <SuggestedCoursesRow />
    </Box>
  );
};
