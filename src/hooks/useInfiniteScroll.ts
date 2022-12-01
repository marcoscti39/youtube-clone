import React from "react";
import { useParams } from "react-router-dom";
import { VideoItemTypes } from "../@types";
import { useSearchVideos } from "./useSearchVideos";

export const useInfiniteScroll = (
  elementToBeObserved: React.RefObject<HTMLDivElement>
) => {
  const { searchQuery } = useParams();
  const [pageToken, setPageToken] = React.useState<{
    token: string | undefined;
  }>({ token: undefined });

  const { data, isLoading, isError } = useSearchVideos(
    searchQuery || "rick rolled",
    pageToken
  );

  const [searchData, setSearchData] = React.useState<VideoItemTypes[]>([]);

  React.useEffect(() => {
    console.log("clean data");
    setSearchData([]);
  }, [searchQuery]);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPageToken({ token: data?.nextPageToken });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);
    observer.observe(elementToBeObserved.current!);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return () => observer.disconnect();
  }, [pageToken]);

  React.useEffect(() => {
    if (data?.items) {
      setSearchData([...searchData, ...data!.items]);
    }
  }, [data]);

  return { searchData, isLoading };
};
