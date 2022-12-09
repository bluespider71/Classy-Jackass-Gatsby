import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    allSanityStatistics {
      nodes {
        info
        label
      }
    }
  }
`;

const Metrics = () => {
  const data = useStaticQuery(query) || {};
  const metricsData = data.allSanityStatistics.nodes;
  return (
    <div>
      <div className="mx-auto mb-10">
        <div className="flex sm:flex-row flex-col gap-3">
          {metricsData.map((node) => (
            <div className="basis-1/3" key={node.info}>
              <p className="font-display md:text-display-lg text-display-md font-normal text-center">
                {node.info}
              </p>
              <p className="text-body-sm font-normal tracking-wider pt-2 text-center">
                {node.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Metrics;
