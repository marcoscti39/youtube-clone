import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../api/fetchCategory";
import { categoriesId } from "../utils/categoriesId";

export const usePodcastVideos = () => {
  return useQuery(["podcastVideos", categoriesId.podcast], () =>
    fetchCategory(categoriesId.podcast)
  );
};
