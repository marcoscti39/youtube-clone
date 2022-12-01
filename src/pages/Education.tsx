import React from "react";
import { useEducationVideos } from "../hooks/useEducationVideos";
import LoadingSkeleton from "../components/LoadingSkeleton";
import CardContainer from "../components/CardContainer";
import InitialPageAside from "../components/InitialPageAside";
import VideoCard from "../components/VideoCard";

const Education = () => {
  const { data: educationVideos, isLoading, isError } = useEducationVideos();
  return (
    <section className="tablet:pl-aside-width tablet:pt-header-height">
      <InitialPageAside />

      {isLoading && <LoadingSkeleton />}
      {isError ? (
        <p>something went wrong :(</p>
      ) : (
        <CardContainer>
          {educationVideos?.items?.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </CardContainer>
      )}
    </section>
  );
};

export default Education;
