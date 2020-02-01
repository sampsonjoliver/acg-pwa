import React from 'react';
import { ListSubheader, makeStyles } from '@material-ui/core';

import { VideoLessonRow } from './VideoLessonRow';
import { CourseOverview } from '../models/course/type';
import ReactList from 'react-list';

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
    <ReactList
      itemRenderer={(index, key) => {
        const item = courseComponents[index];
        if (item.type === 'section') {
          return (
            <ListSubheader
              disableSticky
              key={key}
              className={styles.listSection}
            >
              {item.data.title}
            </ListSubheader>
          );
        }
        if (item.type === 'video' && item.data.content.type === 'video') {
          return (
            <VideoLessonRow
              key={key}
              component={item.data}
              content={item.data.content}
            />
          );
        }
        return <></>;
      }}
      length={courseComponents.length}
      type={'variable'}
      itemSizeGetter={index =>
        courseComponents[index].type === 'section' ? 48 : 72
      }
      useTranslate3d
      pageSize={2}
    />
  );
};
