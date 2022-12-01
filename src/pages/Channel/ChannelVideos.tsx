import { InfiniteData } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { ChannelVideosResponse } from "../../@types";
import CardContainer from "../../components/CardContainer";
import LoadingSpinner from "../../components/LoadingSpinner";
import VideoCard from "../../components/VideoCard";
import { useChannelVideos } from "../../hooks/useChannelVideos";
import { useInfiniteScrollQuery } from "../../hooks/useInfiniteScrollQuery";

const ChannelVideos = () => {
  const { channelID } = useParams();
  const finalOfThePageRef = React.useRef<HTMLDivElement>(null);
  const {
    data: channelVideos,
    isLoading,
    isError,
    isFetching,
    fetchNextPage,
  } = useInfiniteScrollQuery(channelID || "");

  React.useEffect(() => {
    console.log(finalOfThePageRef);

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("aoba");
          fetchNextPage();
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback);
    observer.observe(finalOfThePageRef.current!);

    return () => observer.disconnect();
  }, [finalOfThePageRef.current]);

  return (
    <section className="px-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <p>Something went wrong :(</p>
      ) : (
        <>
          <CardContainer>
            {(channelVideos.pages as ChannelVideosResponse[]).map((page) =>
              page.items.map((video, index) => (
                <VideoCard key={index} {...video} />
              ))
            )}
          </CardContainer>
          {isFetching && <LoadingSpinner />}
        </>
      )}
      <div
        ref={finalOfThePageRef}
        className="w-[2px] h-[2px] mx-auto mt-[5rem]"
        id="finalOfThePage"
      ></div>
    </section>
  );
};

export default ChannelVideos;
