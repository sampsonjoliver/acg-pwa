import gql from 'graphql-tag';

export const ShallowCourseOverviewFragment = gql`
  fragment ShallowCourseOverviewFragment on CourseOverview {
    id
    title
    url
    artworkUrl
    shortSummary
    completedPercent
  }
`;
