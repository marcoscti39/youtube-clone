import { VideoDetailsResponse } from "../@types";
import {
  youtubeV3APIBaseURL,
  youtubeV3APIOptions,
} from "./config/youtubeV3APIConfig";

export const fetchVideoDetails = async (videoID: string) => {
  const response = await fetch(
    `${youtubeV3APIBaseURL}/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoID}`,
    youtubeV3APIOptions
  );
  const data: VideoDetailsResponse = await response.json();
  return data;
};
