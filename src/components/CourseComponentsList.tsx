import React from 'react';
import { List, ListSubheader, makeStyles } from '@material-ui/core';

import { VideoLessonRow } from './VideoLessonRow';
import { CourseOverview } from '../models/course/type';

const useStyles = makeStyles(theme => ({
  listSection: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export const CourseComponentsList: React.FC<{
  course: CourseOverview;
}> = ({ course }) => {
  const styles = useStyles();
  const courseComponents = course.sections.flatMap(section => {
    return [
      { type: 'section' as 'section', data: section },
      ...section.data.map(component => ({
        type: component.content.type,
        data: component,
      })),
    ];
  });
  return (
    <List>
      {courseComponents.map((item, index) => {
        if (item.type === 'section') {
          return (
            <ListSubheader key={index} className={styles.listSection}>
              {item.data.title}
            </ListSubheader>
          );
        }
        if (item.type === 'video' && item.data.content.type === 'video') {
          return (
            <VideoLessonRow
              key={index}
              component={item.data}
              content={item.data.content}
            />
          );
        }
        return null;
      })}
    </List>
  );
};
