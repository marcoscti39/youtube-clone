import React from "react";
import { useMovieVideos } from "../hooks/useMovieVideos";
import LoadingSkeleton from "../components/LoadingSkeleton";
import CardContainer from "../components/CardContainer";
import InitialPageAside from "../components/InitialPageAside";
import VideoCard from "../components/VideoCard";

const Movie = () => {
  const { data: movieVideos, isError, isLoading } = useMovieVideos();
  return (
    <section className="tablet:pl-aside-width tablet:pt-header-height">
      <InitialPageAside />

      {isLoading && <LoadingSkeleton />}
      {isError ? (
        <p>something went wrong :(</p>
      ) : (
        <CardContainer>
          {movieVideos?.items?.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </CardContainer>
      )}
    </section>
  );
};

export default Movie;
