import React from "react";

import LoadingSkeleton from "../components/LoadingSkeleton";
import CardContainer from "../components/CardContainer";
import InitialPageAside from "../components/InitialPageAside";
import VideoCard from "../components/VideoCard";
import { useSportVideos } from "../hooks/useSportVideos";

const Sport = () => {
  const { data: sportVideos, isLoading, isError } = useSportVideos();
  return (
    <section className="tablet:pl-aside-width tablet:pt-header-height">
      <InitialPageAside />

      {isLoading && <LoadingSkeleton />}
      {isError ? (
        <p>something went wrong :(</p>
      ) : (
        <CardContainer>
          {sportVideos?.items?.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </CardContainer>
      )}
    </section>
  );
};

export default Sport;
