import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";
import Metrics from "../components/metrics";
import Team from "../components/team";
import Feed from "../components/feed";

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <div className="flex max-lg:flex-col px-[4.6%] gap-0">
      <div className="basis-1/2">
        <About />
        <Team />
        <Feed />
      </div>
      <div className="basis-1/2">
        <Metrics />
      </div>
    </div>

  </Layout>
);

export default IndexPage;
