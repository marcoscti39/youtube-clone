import millify from "millify";
import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { useChannelDetails } from "../hooks/useChannelDetails";

const ChannelHeader = () => {
  const { channelID } = useParams();

  const { data: channelDetails, isLoading } = useChannelDetails(
    channelID || ""
  );

  const bannerURL =
    channelDetails?.items?.[0]?.brandingSettings?.image?.bannerExternalUrl ||
    "";
  const channelName = channelDetails?.items?.[0]?.snippet?.title || "";
  const subscribers =
    channelDetails?.items?.[0]?.statistics?.subscriberCount || "";
  const customURL = channelDetails?.items?.[0]?.snippet?.customUrl || "";
  const channelImg =
    channelDetails?.items?.[0]?.snippet?.thumbnails?.medium.url || "";
  return (
    <>
      <header>
        <div className="w-full bg-light-black py-2">
          <div
            className="h-[7.5rem] w-full max-w-[800px] mx-auto bg-black bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${bannerURL}')` }}
          ></div>
        </div>

        <article className="flex justify-between py-4 items-center px-4">
          <div className="flex tablet:gap-4">
            <div className="hidden tablet:block tablet:w-[90px] tablet:h-[90px]">
              <img
                src={channelImg}
                alt=""
                className="tablet:w-full tablet:h-full tablet:rounded-[50%] tablet:bg-light-black tablet:object-cover"
              />
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="text-2xl">{channelName}</h1>
              <span className="text-light-gray">{customURL}</span>
              <span className="text-light-gray">
                {millify(Number(subscribers))} subscribers
              </span>
            </div>
          </div>

          <button className="bg-white text-black font-semibold py-2 px-4 rounded-[100vh]">
            Subscribe
          </button>
        </article>
      </header>
      <nav className="flex sticky top-header-height px-4 mb-4 bg-black">
        <NavLink
          to={`/channel/${channelID}/videos`}
          className={({ isActive }) =>
            `py-3 px-6 hover:bg-light-black relative ${
              isActive ? "channel-link" : undefined
            }`
          }
        >
          Videos
        </NavLink>
        <NavLink
          to={`/channel/${channelID}/about`}
          className={({ isActive }) =>
            `py-3 px-6 hover:bg-light-black relative ${
              isActive ? "channel-link" : undefined
            }`
          }
        >
          About
        </NavLink>
      </nav>
    </>
  );
};

export default ChannelHeader;
