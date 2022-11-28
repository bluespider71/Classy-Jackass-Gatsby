import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Eyebrow from "./eyebrow";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "./button";

const Feed = () => {
  const data = useStaticQuery(graphql`
    {
      feedimage: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 296
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return (
    <div id="feed">
      <div className="container mx-auto">
        
      </div>
    </div>
  );
};
export default Feed;
