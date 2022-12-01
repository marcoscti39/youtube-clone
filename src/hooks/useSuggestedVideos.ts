import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../api/fetchCategory";

export const useSuggestedVideos = (videoID: string) => {
  return useQuery(["suggestedVideos", videoID], () => fetchCategory(videoID));
};
