import React from "react";

import AsideSuggestedVideos from "../components/AsideSuggestedVideos";
import CommentsSection from "../components/CommentsSection";
import VideoDetails from "../components/VideoDetails";

const VideoPage = () => {
  return (
    <section className="grid grid-cols-1 px-4 big-tablet:pr-videos-aside-width pt-header-height">
      <VideoDetails />
      <AsideSuggestedVideos />
      <CommentsSection />
    </section>
  );
};

export default VideoPage;
