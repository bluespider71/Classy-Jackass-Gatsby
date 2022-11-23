import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";
import Metrics from "../components/metrics";
import Team from "../components/team";
// import Feed from "../components/feed";

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <About />
    <Metrics />
    <Team />
    {/* <Feed /> */}
  </Layout>
);

export default IndexPage;
