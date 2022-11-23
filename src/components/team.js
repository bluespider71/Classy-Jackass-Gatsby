import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Eyebrow from "./eyebrow";
import TeamItem from "./teamItem";

const Team = () => {
  const data = useStaticQuery(graphql`
    {
      allTeamJson {
        nodes {
          name
          image {
            childImageSharp {
              gatsbyImageData(width: 512)
            }
          }
          role
          desc
        }
      }
    }
  `);

  return (
    <div id="team">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="Team" />
              <h2 className="font-display md:text-display-xl text-display-md pt-5">
                {/* We provide the <span className="italic">best solutions</span>{" "}
                for your dream home */}
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            {data.allTeamJson.nodes.map((node) => (
              <TeamItem
                name={node.name}
                key={node.name}
                image={node.image}
                role={node.role}
                desc={node.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
