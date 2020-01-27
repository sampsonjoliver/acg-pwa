import gql from 'graphql-tag';
import { ShallowCourseOverviewFragment } from './ShallowCourseOverviewFragment';
import { DeepCourseOverviewFragment } from './DeepCourseOverviewFragment';
import { CourseOverview } from './type';

export type DeepUserCourse = {
  userAccessibleCourses: CourseOverview[];
};

export type DeepCourseOverview = {
  courseOverview: CourseOverview;
};

const fragments = {
  ShallowCourseOverviewFragment,
  DeepCourseOverviewFragment,
};

export const ShallowCourseOverviewQuery = gql`
  query getCourseOverview($courseId: String!) {
    courseOverview(courseId: $courseId) {
      ...ShallowCourseOverviewFragment
    }
  }

  ${fragments.ShallowCourseOverviewFragment}
`;

export const DeepUserCourseQuery = gql`
  query getUserAccessibleCourses($courseIds: [String!]!) {
    userAccessibleCourses(courseIds: $courseIds) {
      ...ShallowCourseOverviewFragment
      ...DeepCourseOverviewFragment
    }
  }

  ${fragments.ShallowCourseOverviewFragment}
  ${fragments.DeepCourseOverviewFragment}
`;

export const DeepCourseOverviewQuery = gql`
  query getCourseOverview($courseId: String!) {
    courseOverview(courseId: $courseId) {
      ...ShallowCourseOverviewFragment
      ...DeepCourseOverviewFragment
    }
  }

  ${fragments.ShallowCourseOverviewFragment}
  ${fragments.DeepCourseOverviewFragment}
`;
