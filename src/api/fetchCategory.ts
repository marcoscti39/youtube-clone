import { VideosCategoryResponseTypes } from "../@types";
import {
  youtubeV3APIBaseURL,
  youtubeV3APIOptions,
} from "./config/youtubeV3APIConfig";

export const fetchCategory = async (videoCategoryId: string) => {
  const response = await fetch(
    `${youtubeV3APIBaseURL}/search?relatedToVideoId=${videoCategoryId}&part=id%2Csnippet&type=video&maxResults=50`,
    youtubeV3APIOptions
  );
  const data: VideosCategoryResponseTypes = await response.json();
  return data;
};
