import React, { FormEvent } from "react";

import { BsYoutube as YoutubeIcon } from "react-icons/bs";
import { BiSearchAlt as SearchIcon } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    if (searchInputRef.current) {
      navigate(`search/${searchInputRef.current.value}`);
    }
  };

  return (
    <header className="bg-black w-full fixed py-1 z-20">
      <div className="flex items-center justify-between px-4">
        <Link to="/" className="h-[max-content] relative">
          <YoutubeIcon className="text-primary-red text-6xl relative z-20" />
          <div className="w-[20px] h-[20px] bg-white absolute top-[50%] right-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10"></div>
        </Link>

        <form
          className="flex align-center h-[43px] w-full max-w-[390px] pl-4"
          onSubmit={handleSearch}
        >
          <input
            type="search"
            className="w-full rounded-l-[100vh] text-black indent-4 text-lg"
            placeholder="Search..."
            ref={searchInputRef}
          />
          <button className="w-[50px] rounded-r-[100vh] bg-white" type="submit">
            <SearchIcon className="text-3xl text-primary-red" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
