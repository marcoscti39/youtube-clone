import { ChannelVideosResponse } from "../@types";
import {
  youtubeV3APIBaseURL,
  youtubeV3APIOptions,
} from "./config/youtubeV3APIConfig";

interface ChannelVideosErrorResponse {
  error: {
    code: number;
    message: string;
    status: string;
  };
}

export const fetchChannelVideos = async (
  channelID: string,
  { pageParam = "" }: { pageParam: string }
) => {
  let response;
  if (pageParam === "") {
    response = await fetch(
      `${youtubeV3APIBaseURL}/search?channelId=${channelID}&part=snippet%2Cid&order=date&maxResults=50`,
      youtubeV3APIOptions
    );
  } else {
    response = await fetch(
      `${youtubeV3APIBaseURL}/search?channelId=${channelID}&part=snippet%2Cid&order=date&maxResults=50&pageToken=${
        pageParam || ""
      }'`,
      youtubeV3APIOptions
    );
  }

  const data: ChannelVideosResponse | ChannelVideosErrorResponse =
    await response.json();

  if ((data as ChannelVideosErrorResponse)?.error) {
    throw new Error((data as ChannelVideosErrorResponse).error.message);
  }
  return data;
};
