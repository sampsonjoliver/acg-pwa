import gql from 'graphql-tag';
import { Series } from './type';

export type GetActiveSeriesQuery = {
  getActiveSeries: Series[];
};

export const ActiveSeriesQuery = gql`
  query getActiveSeries {
    getActiveSeries {
      ID: seriesId
      seriesId
      title
      description
      artworkKey
      artworkUrl
      seriesUrl
      isProtected

      activeEpisodes(limit: 10) {
        ID: episodeId
        episodeId
        episodeUrl
        seriesId
        title
        description
        thumbnailUrl
        resources {
          title
          url
        }
        publicSeries {
          seriesId
          title
          description
          artworkKey
          artworkUrl
          seriesUrl
          isProtected
        }
        userProgress {
          secondsWatched
          percentComplete
        }
        activeEpisodeContentId
        activeEpisodeContent {
          sources(videoQuality: 480) {
            fileSize
            duration
            signedUrl
          }
        }
      }
    }
  }
`;
