import React from "react";

import {
  AiFillLike as LikeIcon,
  AiFillDislike as DislikeIcon,
  AiOutlineShareAlt as ShareIcon,
} from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import millify from "millify";

import { useVideoDetails } from "../hooks/useVideoDetails";
import moment from "moment";

const VideoDetails = () => {
  const { videoID } = useParams();

  const {
    data: videoData,
    isLoading,
    isError,
  } = useVideoDetails(videoID || "");

  const [isDescriptionOpen, setIsDescriptionOpen] = React.useState(false);
  const [isLike, setIsLike] = React.useState(false);
  const [isDislike, setIsDislike] = React.useState(false);

  const videoTitle = videoData?.items?.[0]?.snippet?.title || "not provided";
  const channelID = videoData?.items?.[0]?.snippet?.channelId || "";
  const videoDescriptionData = videoData?.items?.[0].snippet?.description || "";
  const videoDescription = isDescriptionOpen
    ? videoDescriptionData
    : `${videoDescriptionData.substring(0, 200)}...`;
  const videoChannelName = videoData?.items?.[0].snippet?.channelTitle || "";
  const videoLikes = videoData?.items?.[0].statistics?.likeCount || "";
  const videoViews = videoData?.items?.[0].statistics?.viewCount || "";
  const publishedDate = moment(
    videoData?.items?.[0]?.snippet?.publishedAt || "",
    "YYYYMMDD"
  ).fromNow();

  const toggleDescription = () => {
    setIsDescriptionOpen((prev) => !prev);
  };
  const toggleLike = () => {
    setIsDislike(false);
    setIsLike((prev) => !prev);
  };
  const toggleDislike = () => {
    setIsLike(false);
    setIsDislike((prev) => !prev);
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <p>Something went wrong :(</p>
      ) : (
        <>
          <main className="flex flex-col gap-2 pr-4">
            <iframe
              style={{ height: "450px", width: "100%" }}
              src={`https://www.youtube.com/embed/${videoID}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>{" "}
            <h1 className="font-semibold text-3xl mb-3">{videoTitle}</h1>
            <div className="flex flex-col notebook:flex-row notebook:justify-between notebook:align-center">
              <div className="flex align-center gap-4">
                <img
                  src=""
                  alt=""
                  className="w-[60px] h-[60px] bg-light-black rounded-[50%] object-cover"
                />
                <div className="flex flex-col gap-1">
                  <Link
                    to={`/channel/${channelID}/videos`}
                    className="font-semibold"
                  >
                    {videoChannelName}
                  </Link>
                  <span>1M Subscribers</span>
                </div>
                <button className="bg-white text-black rounded-[100vh] font-semibold px-4 h-[40px] my-auto ml-8">
                  Subscribe
                </button>
              </div>

              <div className="flex gap-4 mt-2">
                <div className="flex bg-light-black h-[40px] rounded-[100vh]">
                  <button
                    className="px-2 text-lg flex gap-1 align-center p-2 hover:bg-[#0a0a0a] rounded-l-[100vh]"
                    aria-label="like button"
                    onClick={toggleLike}
                  >
                    <LikeIcon
                      className={`my-auto pl-r mr-1 ${
                        isLike ? "text-white" : "text-black"
                      }`}
                    />

                    <span className="text-white pr-2">
                      {millify(Number(videoLikes))}
                    </span>
                  </button>

                  <button
                    className="px-2 text-lg text-black border-l-2 border-black hover:bg-[#0a0a0a] rounded-r-[100vh]"
                    aria-label="dislike button"
                    onClick={toggleDislike}
                  >
                    <DislikeIcon
                      className={`${isDislike ? "text-white" : "text-black"}`}
                    />
                  </button>
                </div>

                <button className="bg-light-black rounded-[100vh] p-2 h-[40px] flex gap-2 align-center hover:bg-[#0a0a0a]">
                  <ShareIcon className=" text-lg my-auto" />
                  <span className="pr-1">Share</span>
                </button>

                <button className="bg-light-black rounded-[100vh] p-2 px-4 h-[40px] hover:bg-[#0a0a0a]">
                  ...
                </button>
              </div>
            </div>
            <div className="bg-light-black p-2 rounded mt-2 hover:bg-[#0a0a0a]">
              <span className="text-lg font-semibold">
                {" "}
                {millify(Number(videoViews))} views {publishedDate}
              </span>
              <p>{videoDescription}</p>
              {videoDescription?.length > 200 && (
                <button
                  aria-label="toggle description"
                  className="text-lg font-semibold"
                  onClick={toggleDescription}
                >
                  {isDescriptionOpen ? "Hide" : "Show More"}
                </button>
              )}
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default VideoDetails;
