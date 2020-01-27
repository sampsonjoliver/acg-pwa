import { useQuery } from '@apollo/react-hooks';
import { DeepUserCourseQuery, DeepUserCourse } from '../models/course/queries';

export const useUserCourse = (courseId: string) => {
  const query = useQuery<DeepUserCourse>(DeepUserCourseQuery, {
    variables: {
      courseIds: [courseId],
    },
  });

  return query;
};
