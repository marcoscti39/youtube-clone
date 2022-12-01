import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { VideoItemTypes } from "../@types";
import CardContainer from "../components/CardContainer";
import LoadingSpinner from "../components/LoadingSpinner";
import ResultsTitle from "../components/ResultsTitle";
import VideoCard from "../components/VideoCard";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { useSearchVideos } from "../hooks/useSearchVideos";

const Search = () => {
  const finalOfThePageRef = React.useRef<HTMLDivElement>(null);
  const { searchQuery } = useParams();
  const { searchData, isLoading } = useInfiniteScroll(finalOfThePageRef!);
  return (
    <section className="pt-header-height px-4">
      <ResultsTitle highlightedTerm={searchQuery || ""} />

      <CardContainer>
        {searchData.length > 0 &&
          searchData.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
      </CardContainer>
      {isLoading && <LoadingSpinner />}

      <div
        ref={finalOfThePageRef}
        className="w-[2px] h-[2px] mx-auto mt-[10rem]"
        id="finalOfThePage"
      ></div>
    </section>
  );
};

export default Search;
