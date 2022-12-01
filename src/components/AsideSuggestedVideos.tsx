import React from "react";
import { useParams } from "react-router-dom";
import { useSuggestedVideos } from "../hooks/useSuggestedVideos";
import HorizontalVideoCard from "./HorizontalVideoCard";
import LoadingSpinner from "./LoadingSpinner";

const AsideSuggestedVideos = () => {
  const { videoID } = useParams();
  const {
    data: suggestedVideos,
    isLoading,
    isError,
  } = useSuggestedVideos(videoID || "");
  return (
    <aside className=" flex flex-col mt-4 gap-2 big-tablet:w-videos-aside-width big-tablet:absolute big-tablet:right-0 big-tablet:top-header-height tablet:mt-0">
      {isLoading && <LoadingSpinner />}
      {isError ? (
        <p>something happened :(</p>
      ) : (
        <>
          {suggestedVideos?.items?.map((video, index) => (
            <HorizontalVideoCard key={index} {...video} />
          ))}
        </>
      )}
    </aside>
  );
};

export default AsideSuggestedVideos;
