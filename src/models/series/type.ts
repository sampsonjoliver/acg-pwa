type SeriesBase = {
  seriesId: string;
  title: string;
  description: string;
  artworkKey: string;
  artworkUrl: string;
  seriesUrl: string;
  isProtected: boolean;
};

type AudioVisualContent = {
  sources:
    | {
        fileSize: string;
        duration: number;
        signedUrl: string | null;
      }[]
    | null;
};

export type Episode = {
  episodeId: string;
  episodeUrl: string;
  seriesId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  resources: {
    title: string;
    url: string;
  }[];
  publicSeries: SeriesBase;
  userProgress: {
    status: 'NO_ACTIVITY' | 'OPENED' | 'COMPLETED';
    secondsWatched: number;
    percentComplete: number;
  };
  activeEpisodeContentId: string | null;
  activeEpisodeContent: AudioVisualContent | null;
};

export type Series = SeriesBase & {
  activeEpisodes: Episode[];
};
