import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../api/fetchCategory";
import { categoriesId } from "../utils/categoriesId";

export const useMusicVideos = () => {
  return useQuery(["musicVideos", categoriesId.music], () =>
    fetchCategory(categoriesId.music)
  );
};
