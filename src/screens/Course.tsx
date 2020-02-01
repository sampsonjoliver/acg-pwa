import React, { useCallback, useState } from 'react';
import {
  Box,
  Typography,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';

import { Screen } from '../components/Screen';
import { useCourse } from '../hooks/useCourse';
import { SlideTransition } from '../components/SlideTransition';
import { CourseComponentsList } from '../components/CourseComponentsList';

type Props = {
  courseId: string;
  open: boolean;
};

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: 'height 0.15s',
  },
  appBarBanner: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundAttachment: 'scroll',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

const useCollapsingAppBar = () => {
  const [scrollX, setScrollX] = useState({
    x: 0,
    maxX: 0,
  });

  const scrollRef = useCallback((node: HTMLElement | null) => {
    node?.addEventListener(
      'scroll',
      e => {
        const el = e.target as HTMLElement;
        setScrollX({ x: el.scrollTop, maxX: el.scrollHeight });
      },
      {
        capture: false,
        passive: true,
      }
    );
  }, []);

  const headerHeight = Math.max(64, 240 - scrollX.x);
  const backgroundScrollPercent = scrollX.x / scrollX.maxX;
  const collapsedPercent = (headerHeight - 64) / (240 - 64);

  return {
    headerHeight,
    backgroundScrollPercent,
    collapsedPercent,
    scrollRef,
  };
};

export const CourseScreen: React.FC<Props> = props => {
  const styles = useStyles();
  const course = useCourse(props.courseId);
  const collapse = useCollapsingAppBar();
  const history = useHistory();

  const TheBox = Box as any;

  const courseData = course.data?.courseOverview;

  return (
    <Dialog fullScreen open={props.open} TransitionComponent={SlideTransition}>
      <Screen>
        <AppBar
          position="static"
          style={{ height: collapse.headerHeight }}
          className={styles.appBar}
        >
          <div
            className={styles.appBarBanner}
            style={{
              backgroundImage: `url(${courseData?.backgroundPosterUrl ?? ''})`,
              backgroundPositionY: `${collapse.backgroundScrollPercent * 100}%`,
              opacity: Math.min(0.8, collapse.collapsedPercent),
            }}
          />
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={() => {
                history.goBack();
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Box flexGrow={1}>
              <Typography variant="h6">{courseData?.title ?? ''}</Typography>
            </Box>
          </Toolbar>
        </AppBar>

        <TheBox
          ref={collapse.scrollRef}
          style={{
            height: '100%',
            overflowY: 'scroll',
          }}
        >
          {courseData && <CourseComponentsList course={courseData} />}
        </TheBox>
      </Screen>
    </Dialog>
  );
};
