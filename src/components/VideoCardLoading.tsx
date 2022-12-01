import React from "react";

const VideoCardLoading = () => {
  return (
    <div className="bg-[#111] rounded">
      <div className="object-cover w-full h-[180px] bg-zinc-900" />
      <div className="flex flex-col gap-2 p-2 h-[100px]">
        <div className="bg-gray-800 w-[90%] h-[15px] mt-3"></div>
        <div className="bg-gray-800 w-[60%] h-[15px]"></div>
      </div>
    </div>
  );
};

export default VideoCardLoading;
