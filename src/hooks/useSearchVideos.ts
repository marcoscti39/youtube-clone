import { useQuery } from "@tanstack/react-query";
import { fetchSearchedVideo } from "../api/fetchSearchQuery";

export const useSearchVideos = (
  searchQuery: string,
  pageToken?: { token: string | undefined }
) =>
  useQuery({
    queryKey: ["searchVideos", searchQuery, pageToken],
    queryFn: () => fetchSearchedVideo(searchQuery, pageToken),
  });
