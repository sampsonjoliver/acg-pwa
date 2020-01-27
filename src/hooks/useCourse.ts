import { useQuery } from '@apollo/react-hooks';
import {
  DeepCourseOverviewQuery,
  DeepCourseOverview,
} from '../models/course/queries';

export const useCourse = (courseId: string) => {
  const query = useQuery<DeepCourseOverview>(DeepCourseOverviewQuery, {
    variables: {
      courseId,
    },
  });

  return query;
};
