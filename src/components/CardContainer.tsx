import React from "react";
import VideoCard from "./VideoCard";

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,300px)] gap-3 justify-center pb-4">
      {children}
    </section>
  );
};

export default CardContainer;
