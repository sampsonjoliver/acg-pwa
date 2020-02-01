import React, { useCallback, useState } from 'react';
import {
  Box,
  Typography,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListSubheader,
  makeStyles,
} from '@material-ui/core';
import { Image } from 'cloudinary-react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';
import GetAppIcon from '@material-ui/icons/GetApp';

import { Screen } from '../components/Screen';
import { useCourse } from '../hooks/useCourse';
import { SlideTransition } from '../components/SlideTransition';
import { CourseOverview } from '../models/course/type';
import { Link } from 'react-router-dom';

type Props = {
  courseId: string;
  open: boolean;
};

const useStyles = makeStyles(theme => ({
  listSection: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    transition: 'height 0.1s',
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

export const CourseScreen: React.FC<Props> = props => {
  const styles = useStyles();
  const course = useCourse(props.courseId);
  const [scrollX, setScrollX] = useState({ x: 0, maxX: 0 });
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
  const history = useHistory();

  const TheBox = Box as any;
  const headerHeight = Math.max(64, 240 - scrollX.x);

  const courseData = course.data?.courseOverview;

  const backgroundPosition = (scrollX.x / scrollX.maxX) * 100;
  const collapsedPercent = (headerHeight - 64) / (240 - 64);
  console.log({ collapsedPercent });

  return (
    <Dialog fullScreen open={props.open} TransitionComponent={SlideTransition}>
      <Screen>
        <AppBar
          position="static"
          style={{ height: headerHeight }}
          className={styles.appBar}
        >
          <div
            className={styles.appBarBanner}
            style={{
              backgroundImage: `url(${courseData?.backgroundPosterUrl ?? ''})`,
              backgroundPositionY: `${backgroundPosition}%`,
              opacity: Math.min(0.8, collapsedPercent),
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
          style={{
            overflowY: 'scroll',
            height: `calc(100vh - ${headerHeight}px)`,
          }}
          ref={scrollRef as any}
        >
          {courseData && <CourseComponentsList course={courseData} />}
        </TheBox>
      </Screen>
    </Dialog>
  );
};

const CourseComponentsList: React.FC<{ course: CourseOverview }> = ({
  course,
}) => {
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
      {courseComponents.map(item => {
        if (item.type === 'section') {
          return (
            <ListSubheader className={styles.listSection}>
              {item.data.title}
            </ListSubheader>
          );
        }

        if (item.type === 'video' && item.data.content.type === 'video') {
          const durationText = `${item.data.content.duration}s`;
          const sizeText = formatFileSize(
            item.data.content.videosources
              ? item.data.content.videosources[0].filesize
              : 0
          );

          return (
            <Link
              to={location => {
                const params = new URLSearchParams(location.search);
                const newParams = new URLSearchParams();
                newParams.append('screen', params.get('screen') ?? '');

                return {
                  ...location,
                  pathname: `/video/${item.data.componentId}`,
                  search: newParams.toString(),
                };
              }}
            >
              <ListItem button>
                <Box height="45px" width="80px" mr={2}>
                  <Image
                    style={{ height: '100%' }}
                    width="auto"
                    dpr="auto"
                    crop="scale"
                    type="fetch"
                    publicId={item.data.content.videoposter}
                    responsive
                    responsiveUseBreakpoints="true"
                    alt={item.data.title}
                    crossOrigin="anonymous"
                  />
                </Box>
                <ListItemText
                  primary={item.data.title}
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
        }
      })}
    </List>
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
