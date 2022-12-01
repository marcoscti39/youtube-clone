export interface VideoItemTypes {
  kind: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: string;
      };
      medium: {
        url: string;
        width: number;
        height: string;
      };
      high: {
        url: string;
        width: number;
        height: string;
      };
    };
    channelTitle: string;
    publishedTime: string;
  };
}

export interface VideosCategoryResponseTypes {
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: VideoItemTypes[];
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

export interface High {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
}

export interface RegionRestriction {
  blocked: string[];
}

export interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  regionRestriction: RegionRestriction;
  projection: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface VideoDetailsItem {
  kind: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface VideoDetailsResponse {
  kind: string;
  items: VideoDetailsItem[];
  pageInfo: PageInfo;
}

export interface CommentsPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface AuthorChannelId {
  value: string;
}

export interface CommentSnippet2 {
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: AuthorChannelId;
  canRate: boolean;
  viewerRating: string;
  likeCount: number;
  publishedAt: Date;
  updatedAt: Date;
}

export interface TopLevelComment {
  kind: string;
  id: string;
  snippet: CommentSnippet2;
}

export interface CommentSnippet {
  videoId: string;
  topLevelComment: TopLevelComment;
  canReply: boolean;
  totalReplyCount: number;
  isPublic: boolean;
}

export interface CommentItem {
  kind: string;
  id: string;
  snippet: CommentSnippet;
}

export interface CommentResponse {
  kind: string;
  nextPageToken: string;
  pageInfo: CommentsPageInfo;
  items: CommentItem[];
}

export interface ChannelRelatedPlaylists {
  likes: string;
  uploads: string;
}

export interface ContentDetails {
  relatedPlaylists: ChannelRelatedPlaylists;
}

export interface ChannelStatistics {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
}

export interface Channel {
  title: string;
  description: string;
  keywords: string;
  unsubscribedTrailer: string;
}

export interface ChannelImage {
  bannerExternalUrl: string;
}

export interface ChannelBrandingSettings {
  channel: Channel;
  image: ChannelImage;
}

export interface ChannelSnippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: Date;
  thumbnails: Thumbnails;
  localized: Localized;
}

export interface ChannelItem {
  kind: string;
  id: string;
  snippet: ChannelSnippet;
  contentDetails: ContentDetails;
  statistics: ChannelStatistics;
  brandingSettings: ChannelBrandingSettings;
}

export interface ChannelResponse {
  kind: string;
  pageInfo: PageInfo;
  items: ChannelItem[];
}

export interface ChannelVideosResponse {
  kind: string;
  items: VideoItemTypes[];
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
}
