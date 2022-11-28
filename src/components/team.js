import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// import Eyebrow from "./eyebrow";
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
      <div className="sm:ml-16 mx-12">
        <div className="flex flex-col py-18">
          {/* <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="Team" />
              <h2 className="font-display md:text-display-xl text-display-md pt-5">
              </h2>
            </div>
          </div> */}
          <div className="flex sm:flex-row flex-col gap-5">
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
