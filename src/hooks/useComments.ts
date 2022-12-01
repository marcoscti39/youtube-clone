import { useQuery } from "@tanstack/react-query";
import { fetchVideoComments } from "../api/fetchComments";

export const useComments = (videoID: string) => {
  return useQuery(["comments", videoID], () => fetchVideoComments(videoID));
};
