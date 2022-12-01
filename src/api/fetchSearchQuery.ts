import { VideosCategoryResponseTypes } from "../@types";

import {
  youtubeV3APIBaseURL,
  youtubeV3APIOptions,
} from "./config/youtubeV3APIConfig";

export const fetchSearchedVideo = async (
  searchQuery: string,
  pageToken?: { token: string | undefined }
) => {
  const response = await fetch(
    `${youtubeV3APIBaseURL}/search?q=${searchQuery}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date&pageToken=${
      pageToken?.token || ""
    }`,
    youtubeV3APIOptions
  );
  const data: VideosCategoryResponseTypes = await response.json();
  return data;
};
