import React from "react";

import { Outlet, Route, Routes, useParams } from "react-router-dom";

import ChannelHeader from "../../components/ChannelHeader";
import ChannelDetails from "./ChannelDetails";

import ChannelVideos from "./ChannelVideos";

const Channel = () => {
  console.log("oi");
  return (
    <section className="pt-header-height">
      <ChannelHeader />
      <Outlet />
    </section>
  );
};

export default Channel;
