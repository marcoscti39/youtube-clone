import moment from "moment";
import React from "react";

import {
  AiFillLike as LikeIcon,
  AiFillDislike as DislikeIcon,
} from "react-icons/ai";

import HTMLReactParser from "html-react-parser";

import { MdArrowDropDown as ArrowDownIcon } from "react-icons/md";
import { Link } from "react-router-dom";
import { CommentItem } from "../@types";

const Comment: React.FC<CommentItem> = ({
  snippet: {
    topLevelComment: {
      snippet: {
        likeCount,
        authorChannelId,
        authorDisplayName,
        authorProfileImageUrl,
        textDisplay,
        publishedAt,
      },
    },
    totalReplyCount,
  },
}) => {
  console.log(textDisplay);
  const publishedSince = moment(publishedAt, "YYYYMMDD").fromNow();
  return (
    <article className="flex gap-4">
      <Link to={`/channel/${authorChannelId?.value}`}>
        <div className="w-[40px] h-[40px]">
          <img
            src={authorProfileImageUrl}
            alt=""
            className="w-full h-full bg-[#111] object-cover rounded-[50%]"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-1">
        <h2 className="flex gap-2 items-center">
          {authorDisplayName}
          <span className="text-sm text-light-gray">{publishedSince}</span>
        </h2>

        <p>{HTMLReactParser(textDisplay)}</p>

        <div className="flex gap-2 items-center">
          <button>
            <LikeIcon className={`text-light-black`} />
          </button>
          <span>{likeCount}</span>
          <button className="ml-1">
            <DislikeIcon className={`text-light-black`} />
          </button>

          <button className="py-2 px-4 rounded-[100vh] hover:bg-light-black font-semibold">
            responder
          </button>
        </div>
        {totalReplyCount > 0 && (
          <>
            <button className="flex font-semibold items-center gap-2 py-2 px-4 rounded-[100vh] text-primary-red hover:bg-light-black w-[max-content]">
              <ArrowDownIcon className="text-2xl" />
              {totalReplyCount} respostas
            </button>
          </>
        )}
      </div>
    </article>
  );
};

export default Comment;
