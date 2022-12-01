import { useQuery } from "@tanstack/react-query";
import { fetchChannelVideos } from "../api/fetchChannelVideos";

export const useChannelVideos = (channelID: string) => {
  return useQuery(["channelVideos", channelID], () =>
    fetchChannelVideos(channelID, { pageParam: "" })
  );
};
