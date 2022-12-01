import { useQuery } from "@tanstack/react-query";
import { fetchVideoDetails } from "../api/fetchVideoDetails";

export const useVideoDetails = (videoID: string) => {
  return useQuery(["videoDetails", videoID], () => fetchVideoDetails(videoID));
};
