import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../api/fetchCategory";
import { categoriesId } from "../utils/categoriesId";

export const useGamingVideos = () => {
  return useQuery(["gamingVideos", categoriesId.gaming], () =>
    fetchCategory(categoriesId.gaming)
  );
};
