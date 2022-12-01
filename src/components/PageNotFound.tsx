import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center flex-col gap-4 justify-center w-screen h-screen ">
      <p>Sorry page not found :(</p>
      <Link to="/" preventScrollReset={false}>
        <button className="p-2 rounded border-primary-red border-[2px]">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
