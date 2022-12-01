import React from "react";
import CardContainer from "./CardContainer";
import VideoCardLoading from "./VideoCardLoading";

const LoadingSkeleton = () => {
  return (
    <div>
      <CardContainer>
        {Array.from({ length: 20 }).map((_, index) => (
          <VideoCardLoading key={index} />
        ))}
      </CardContainer>
    </div>
  );
};

export default LoadingSkeleton;
