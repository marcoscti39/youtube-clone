import React from "react";
import { asideData } from "../utils/asideData";
import AsideItem from "./AsideItem";

const InitialPageAside = () => {
  return (
    <aside className=" overflow-x-hidden pt-header-height tablet:pt-0 tablet:top-header-height tablet:fixed tablet:left-0 tablet:w-aside-width tablet:h-screen tablet:pb-8">
      <div className="p-2 overflow-y-scroll">
        <nav>
          <ul className="flex gap-4 tablet:flex-col">
            {asideData.map((data, index) => (
              <AsideItem key={index} {...data} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default InitialPageAside;
