import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { VideoItemTypes } from "../@types";

const HorizontalVideoCard: React.FC<VideoItemTypes> = ({
  snippet: {
    channelTitle,
    thumbnails: { medium },
    publishedAt,
    title,
  },
  id: { videoId },
}) => {
  const videoTitle = title.length > 30 ? `${title.substring(0, 30)}` : title;

  const channelName =
    channelTitle.length > 30
      ? `${channelTitle.substring(0, 30)}`
      : channelTitle;
  const publishedDate = moment(publishedAt, "YYYYMMDD").fromNow();

  return (
    <Link to={`/watch_video/${videoId}`}>
      <article className="flex gap-2">
        <img
          src={medium?.url}
          alt=""
          className="w-[170px] h-[100px] rounded-lg object-cover"
        />
        <div className="flex flex-col">
          <h2 className="font-semibold">{videoTitle}</h2>
          <span className="text-light-gray text-sm mt-1">{channelName}</span>
          <span className="text-light-gray text-sm">{publishedDate}</span>
        </div>
      </article>
    </Link>
  );
};

export default HorizontalVideoCard;
