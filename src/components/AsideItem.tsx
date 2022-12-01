import React from "react";

import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { AsideData } from "../utils/asideData";

const AsideItem: React.FC<AsideData> = ({ icon, name, path }) => {
  const location = useLocation();
  return (
    <NavLink to={path}>
      <li
        className={`flex tablet:grid tablet:grid-cols-2 items-center rounded-[100vh] p-2 w-[max-content] tablet:w-full tablet:justify-center ${
          (location.pathname === "/" && path === "/") ||
          location.pathname.includes(path === "/" ? "blabla" : path)
            ? "bg-primary-red"
            : "bg-black"
        }`}
      >
        <div
          className={`text-lg mr-4 justify-self-end ${
            location.pathname.includes(path) ? "text-white" : "text-primary-red"
          }`}
        >
          {icon}
        </div>
        <span className="font-semibold text-sm tablet:w-[70px]">{name}</span>
      </li>
    </NavLink>
  );
};

export default AsideItem;
