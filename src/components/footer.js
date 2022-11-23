import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allSocialJson {
        nodes {
          id
          name
          href
          icon {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <footer>
      <div className="container-fluid mx-auto">
        <div className="flex flex-col bg-black px-[30px]">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-1">
            <div className="col-span-6">
              <h6 className="leading-[80px] text-white max-[768px]:text-center">
                &copy;2022, Classy Jackass. All Rights Reserved.
              </h6>
            </div>
            <div className="flex flex-row items-center gap-6 col-span-6 max-[768px]:justify-center justify-end">
              {data.allSocialJson.nodes.map((node) => (
                <a
                  href={node.href}
                  key={node.name}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black h-5 w-5"
                >
                  <img
                    className="m-auto"
                    src={node.icon.publicURL}
                    alt={node.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
