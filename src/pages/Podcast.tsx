import React from "react";
import { usePodcastVideos } from "../hooks/usePodcastVideos";
import LoadingSkeleton from "../components/LoadingSkeleton";
import CardContainer from "../components/CardContainer";
import InitialPageAside from "../components/InitialPageAside";
import VideoCard from "../components/VideoCard";
const Podcast = () => {
  const { data: podcastVideos, isLoading, isError } = usePodcastVideos();
  return (
    <section className="tablet:pl-aside-width tablet:pt-header-height">
      <InitialPageAside />

      {isLoading && <LoadingSkeleton />}
      {isError ? (
        <p>something went wrong :(</p>
      ) : (
        <CardContainer>
          {podcastVideos?.items?.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </CardContainer>
      )}
    </section>
  );
};

export default Podcast;
