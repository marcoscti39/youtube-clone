import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import Channel from "./pages/Channel";
import ChannelDetails from "./pages/Channel/ChannelDetails";
import ChannelVideos from "./pages/Channel/ChannelVideos";
import Education from "./pages/Education";
import Gaming from "./pages/Gaming";
import Home from "./pages/Home";
import Lives from "./pages/Lives";
import Movie from "./pages/Movie";
import Music from "./pages/Music";
import Podcast from "./pages/Podcast";
import Programming from "./pages/Programming";
import Search from "./pages/Search";
import Sport from "./pages/Sport";
import VideoPage from "./pages/VideoPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/programming" element={<Programming />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/category/music" element={<Music />} />
        <Route path="/category/education" element={<Education />} />
        <Route path="/category/podcast" element={<Podcast />} />
        <Route path="/category/movie" element={<Movie />} />
        <Route path="/category/gaming" element={<Gaming />} />
        <Route path="/category/live" element={<Lives />} />
        <Route path="/category/sport" element={<Sport />} />
        <Route path="/watch_video/:videoID" element={<VideoPage />} />
        <Route path="/channel/:channelID" element={<Channel />}>
          <Route index element={<ChannelVideos />} />
          <Route path="videos" element={<ChannelVideos />} />
          <Route path="about" element={<ChannelDetails />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
