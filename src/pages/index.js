import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";
import Metrics from "../components/metrics";
import Team from "../components/team";
import Feed from "../components/feed";
import Login from "../components/login";
import Faq from "../components/faq";

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <Hero />
      <div className="flex lg:flex-row flex-col px-[4.6%] gap-10">
        <div className="basis-1/2">
          <About />
          <Team />
          <Feed />
        </div>
        <div className="basis-1/2">
          <Login />
          <Faq />
          <Metrics />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

