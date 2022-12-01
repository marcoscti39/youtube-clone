import { ChannelResponse } from "../@types";
import {
  youtubeV3APIBaseURL,
  youtubeV3APIOptions,
} from "./config/youtubeV3APIConfig";

export const fetchChannelDetails = async (channelID: string) => {
  const response = await fetch(
    `${youtubeV3APIBaseURL}/channels?part=snippet%2Cstatistics&id=${channelID}`,
    youtubeV3APIOptions
  );
  const data: ChannelResponse = await response.json();
  return data;
};
