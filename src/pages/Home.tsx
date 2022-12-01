import React from "react";
import CardContainer from "../components/CardContainer";
import InitialPageAside from "../components/InitialPageAside";

const Home = () => {
  return (
    <section className="tablet:pl-aside-width tablet:pt-header-height">
      <InitialPageAside />
    </section>
  );
};

export default Home;
