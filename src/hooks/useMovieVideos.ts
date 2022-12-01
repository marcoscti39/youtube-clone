import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../api/fetchCategory";
import { categoriesId } from "../utils/categoriesId";

export const useMovieVideos = () => {
  return useQuery(["movieVideos", categoriesId.movie], () =>
    fetchCategory(categoriesId.movie)
  );
};
