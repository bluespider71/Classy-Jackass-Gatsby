import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    allSanitySiteSettings {
      nodes {
        description
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(query) || {};
  return (
    <div id="about">
      <div className="pt-[11%] pl-[11.6%]">
        <p
          className="font-['Roboto'] font-[400] md:text-[2rem] max-[768px]:text-[1.5rem]
          min-[768px]:leading-[40px] max-[767px]:leading-[30px] text-black"
        >
          {data.allSanitySiteSettings?.nodes[0]?.description}
        </p>
      </div>
    </div>
  );
};
export default About;
