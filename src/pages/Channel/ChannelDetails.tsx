import millify from "millify";
import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";
import { useChannelDetails } from "../../hooks/useChannelDetails";

const ChannelDetails = () => {
  const { channelID } = useParams();
  const { data: channelDetails, isLoading } = useChannelDetails(
    channelID || ""
  );

  const views = millify(
    Number(channelDetails?.items[0]?.statistics.viewCount || "")
  );
  const subscribedSince = moment(
    channelDetails?.items[0]?.snippet.publishedAt || ""
  ).format("YYYY/MMM/DD");
  const videos = channelDetails?.items[0]?.statistics.videoCount || "";
  const description = channelDetails?.items[0]?.snippet.description || "";

  return (
    <section className="pt-header-height px-4">
      <div className="flex flex-col gap-8 mx-auto w-full max-w-[800px] pb-12">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-2xl">Description: </h2>
          <p>{description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-2xl">Statistics:</h2>
          <span>Subscribed Since {subscribedSince} </span>
          <span>{views} Of Views</span>
          <span>{videos} Videos</span>
        </div>
      </div>
    </section>
  );
};

export default ChannelDetails;
