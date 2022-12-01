import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../api/fetchCategory";
import { categoriesId } from "../utils/categoriesId";

export const useSportVideos = () => {
  return useQuery(["sportVideos", categoriesId.sport], () =>
    fetchCategory(categoriesId.sport)
  );
};
