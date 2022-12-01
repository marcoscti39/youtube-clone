import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../api/fetchCategory";
import { categoriesId } from "../utils/categoriesId";

export const useEducationVideos = () => {
  return useQuery(["educationVideos", categoriesId.education], () =>
    fetchCategory(categoriesId.education)
  );
};
