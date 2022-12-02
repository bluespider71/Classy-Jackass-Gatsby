import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

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
    allSanitySocials {
      edges {
        node {
          icon {
            ...SanityImage
            alt
          }
          name
          link
        }
      }
    }
  }
`;

const Footer = () => {
  const data = useStaticQuery(query) || {};
  const socialIcon = data.allSanitySocials.edges;

  return (
    <footer>
      <div className="container-fluid mx-auto">
        <div className="flex flex-col bg-black px-[24px]">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-1">
            <div className="col-span-6">
              <h6 className="leading-[80px] text-white max-[768px]:text-center font-['Roboto'] font-[500]">
                &copy;2022, Classy Jackass. All Rights Reserved.
              </h6>
            </div>
            <div className="flex flex-row items-center py-4 gap-6 col-span-6 max-[768px]:justify-center justify-end">
              {socialIcon.map((item) => (
                <a
                  href={item.node.link}
                  key={item.node.name}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black h-7 w-7"
                >
                  {item.node.icon && item.node.icon.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(item.node.icon))
                        .fit("crop")
                        .auto("format")
                        .url()}
                      width=""
                      className="m-auto"
                      alt={item.node.icon.alt}
                    />
                  )}
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
