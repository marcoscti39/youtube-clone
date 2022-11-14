import React from "react";

import { BsYoutube as YoutubeIcon } from "react-icons/bs";
import { BiSearchAlt as SearchIcon } from "react-icons/bi";

const Header = () => {
  return (
    <header className="bg-purple-400 w-full">
      <div className="flex items-center justify-between px-4">
        <a href="#">
          <YoutubeIcon className="text-primary-red text-6xl" />
        </a>

        <form
          action=""
          className="flex align-center h-[47px] w-full max-w-[390px] pl-4"
        >
          <input
            type="search"
            className="w-full rounded-l-[100vh] text-black indent-4 text-lg"
            placeholder="Search..."
          />
          <button className="w-[50px] rounded-r-[100vh] bg-white">
            <SearchIcon className="text-3xl text-primary-red" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
