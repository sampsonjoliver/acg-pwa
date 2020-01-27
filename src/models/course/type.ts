type ComponentContent = {
  type: 'quiz' | 'lab' | 'text' | 'whitepaper';
};

export type VideoComponentContent = {
  type: 'video';
  duration: number;
  videoposter: string;
  videosources?: Array<{
    filesize: number;
    signedUrl: string | null;
  }>;
};

export type Resource = {
  title: string;
  url: string;
};

export type Component = {
  id: string;
  componentId: string;
  courseId: string;
  sectionId: string;
  title: string;
  sequence: number;
  url: string;
  resources: Resource[] | null;
  completed: boolean;
  content: ComponentContent | VideoComponentContent;
};

export type Section = {
  id: string;
  courseId: string;
  title: string;
  sequence: number;
  url: string;
  data: Component[];
};

export type CourseOverview = {
  id: string;
  title: string;
  url: string;
  artworkUrl: string;
  shortSummary: string;
  description: string;
  duration: number;
  publishedDate: string;
  decommissionedDate: string;
  numberOfLessons: number;
  outcomes: string[];
  audience: string[];
  quizCount: number;
  lectureCount: number;
  hasPracticeExams: boolean;
  previewVideoUrl: string;

  completed: boolean;
  completedPercent: number;
  isNonMembers: boolean;

  metadata: {
    createdDate: Date;
    notifyUpdatedDate: Date;
    updatedDate: Date;
  };

  changelogs: Array<{
    date: Date;
    description: string;
    author: string;
  }>;

  sections: Section[];
};
