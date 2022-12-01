import { useInfiniteQuery } from "@tanstack/react-query";
import { ChannelVideosResponse } from "../@types";
import { fetchChannelVideos } from "../api/fetchChannelVideos";

export const useInfiniteScrollQuery = (channelID: string) => {
  return useInfiniteQuery(
    ["channelVideosInfinite", channelID],
    () => fetchChannelVideos(channelID, { pageParam: "" }),
    {
      getNextPageParam: (lastPage) =>
        (lastPage as ChannelVideosResponse).nextPageToken,
    }
  );
};
