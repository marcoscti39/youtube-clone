import React from "react";
import { Link } from "react-router-dom";
import { VideoItemTypes } from "../@types";

const VideoCard: React.FC<VideoItemTypes> = ({
  snippet: { channelTitle, thumbnails, title, channelId },
  id: { videoId },
}) => {
  return (
    <article className="bg-light-black rounded">
      <Link to={`/watch_video/${videoId}`}>
        <img
          src={thumbnails?.medium?.url}
          alt="thumbnail video"
          className="object-cover w-full h-[180px]"
        />
      </Link>

      <div className="flex flex-col gap-2 p-2 h-[100px]">
        <h2>{title.length > 50 ? `${title.substring(0, 50)}...` : title}</h2>
        <Link to={`/channel/${channelId}/videos`}>
          <strong className="text-[#555] font-normal">
            {channelTitle.length > 30
              ? `${channelTitle.substring(0, 30)}...`
              : channelTitle}{" "}
          </strong>
        </Link>
      </div>
    </article>
  );
};

export default VideoCard;
