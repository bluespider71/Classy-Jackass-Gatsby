import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import { Link } from "gatsby";

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
    allSanitySiteSettings {
      edges {
        node {
          logoimage {
            ...SanityImage
            alt
          }
        }
      }
    }
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
  const logoimage = data.allSanitySiteSettings.edges[0].node.logoimage;
  const socialIcon = data.allSanitySocials.edges;

  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex flex-row justify-center py-10 gap-20">
          {socialIcon.map((item) => (
            <div
              className="border-2 border-white rounded-[44px] w-[110px] py-[13px]"
              key={item.node.name}
            >
              <Link
                to={item.node.link}
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
                    className="m-auto"
                    alt={item.node.icon.alt}
                  />
                )}
              </Link>
            </div>
          ))}
        </div>
        <div className="pt-[20px]">
          {logoimage && logoimage.asset && (
            <img
              src={imageUrlFor(buildImageObj(logoimage))
                .fit("crop")
                .auto("format")
                .url()}
              className=""
              alt={logoimage.alt}
            />
          )}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
