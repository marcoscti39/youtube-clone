import React from "react";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { useMusicVideos } from "../hooks/useMusicVideos";
import CardContainer from "../components/CardContainer";
import InitialPageAside from "../components/InitialPageAside";
import VideoCard from "../components/VideoCard";

const Music = () => {
  const { data: musicVideos, isLoading, isError } = useMusicVideos();

  return (
    <section className="tablet:pl-aside-width tablet:pt-header-height">
      <InitialPageAside />

      {isLoading && <LoadingSkeleton />}
      {isError ? (
        <p>something went wrong :(</p>
      ) : (
        <CardContainer>
          {musicVideos?.items?.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </CardContainer>
      )}
    </section>
  );
};

export default Music;
