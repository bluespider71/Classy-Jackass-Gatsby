import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import TeamItem from "./teamItem";

const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }
  query {
    allSanityTeams {
      edges {
        node {
          image {
            ...SanityImage
            alt
          }
        }
      }
    }
  }
`;

const Team = () => {
  const data = useStaticQuery(query) || {};
  const teamsData = data.allSanityTeams.edges;

  return (
    <div id="team">
      <div className="sm:ml-16 mx-12">
        <div className="flex flex-col pt-18">
          <div className="flex sm:flex-row flex-col gap-5">
            {teamsData.map((team) => (
              <TeamItem
                image={team.node.image}
                key={team.node.image.alt}
                alt={team.node.image.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
