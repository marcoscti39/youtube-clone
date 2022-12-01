import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchCategory } from "../api/fetchCategory";
import CardContainer from "../components/CardContainer";
import InitialPageAside from "../components/InitialPageAside";
import LoadingSkeleton from "../components/LoadingSkeleton";
import VideoCard from "../components/VideoCard";
import { categoriesId } from "../utils/categoriesId";

const Programming = () => {
  const programmingVideosId = categoriesId.programming;
  const { data, isError, isLoading } = useQuery({
    queryKey: ["programmingVideos", programmingVideosId],
    queryFn: () => fetchCategory(programmingVideosId),
  });
  return (
    <section className="tablet:pl-aside-width tablet:pt-header-height">
      <InitialPageAside />
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <CardContainer>
          {data?.items?.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </CardContainer>
      )}
    </section>
  );
};

export default Programming;
