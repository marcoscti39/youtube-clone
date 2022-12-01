import { CommentResponse } from "../@types";
import {
  youtubeV3APIBaseURL,
  youtubeV3APIOptions,
} from "./config/youtubeV3APIConfig";

export const fetchVideoComments = async (videoID: string) => {
  const response = await fetch(
    `${youtubeV3APIBaseURL}/commentThreads?part=snippet&videoId=${videoID}&maxResults=50`,
    youtubeV3APIOptions
  );
  const data: CommentResponse = await response.json();
  return data;
};
