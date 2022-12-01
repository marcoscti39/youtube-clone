import { useQuery } from "@tanstack/react-query";
import { fetchChannelDetails } from "../api/fetchChannelDetails";

export const useChannelDetails = (channelID: string) => {
  return useQuery(["channelDetails", channelID], () =>
    fetchChannelDetails(channelID)
  );
};
