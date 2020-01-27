import gql from 'graphql-tag';

export const DeepCourseOverviewFragment = gql`
  fragment DeepCourseOverviewFragment on CourseOverview {
    description
    duration
    publishedDate
    decommissionedDate
    numberOfLessons
    outcomes
    audience
    quizCount
    lectureCount
    hasPracticeExams
    previewVideoUrl

    completed

    metadata {
      createdDate
      notifyUpdatedDate
      updatedDate
    }

    changelogs {
      date
      description
      author
    }

    sections {
      id
      courseId
      title
      sequence
      url
      data: components {
        id
        componentId: id
        courseId
        sectionId
        title
        sequence
        url
        resources {
          title
          url
        }
        completed
        content {
          type
          ... on VideoCourseComponentContent {
            duration
            videoposter
            videosources(
              filter: { videoType: "video/mp4", preferredQuality: "720p" }
            ) {
              filesize
              signedUrl
            }
          }
          ... on QuizCourseComponentContent {
            quizName
          }
        }
      }
    }
  }
`;
