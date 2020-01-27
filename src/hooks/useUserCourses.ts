import { useQuery } from '@apollo/react-hooks';
import { DeepUserCourseQuery, DeepUserCourse } from '../models/course/queries';

export const useUserCourses = () => {
  const query = useQuery<DeepUserCourse>(DeepUserCourseQuery, {
    variables: {
      courseIds: [],
    },
  });

  return query;
};
