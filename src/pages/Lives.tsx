import React from "react";

import LoadingSkeleton from "../components/LoadingSkeleton";
import CardContainer from "../components/CardContainer";
import InitialPageAside from "../components/InitialPageAside";
import VideoCard from "../components/VideoCard";
import { useLiveVideos } from "../hooks/useLiveVideos";

const Lives = () => {
  const { data: liveVideos, isLoading, isError } = useLiveVideos();
  return (
    <section className="tablet:pl-aside-width tablet:pt-header-height">
      <InitialPageAside />

      {isLoading && <LoadingSkeleton />}
      {isError ? (
        <p>something went wrong :(</p>
      ) : (
        <CardContainer>
          {liveVideos?.items?.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </CardContainer>
      )}
    </section>
  );
};

export default Lives;
