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
    allSanitySiteSettings {
      edges {
        node {
          heroimage {
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

const Hero = () => {
  const data = useStaticQuery(query) || {};
  const heroimage = data.allSanitySiteSettings.edges[0].node.heroimage;
  const socialIcon = data.allSanitySocials.edges;
  return (
    <div id="hero">
      <div className="relative">
        {heroimage && heroimage.asset && (
          <img
            src={imageUrlFor(buildImageObj(heroimage))
              .fit("crop")
              .auto("format")
              .url()}
            width="5120"
            alt={heroimage.alt}
          />
        )}
        <div className="absolute left-[19%] top-[45%] w-[21%] h-[5.2%]">
          <div className="social-links-buttons">
            <div className="flex flex-row justify-between">
              {socialIcon.map((item) => (
                <a
                  href={item.node.link}
                  key={item.node.name}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black rounded-[44px] w-[28%] flex"
                >
                  {item.node.icon && item.node.icon.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(item.node.icon))
                        .fit("crop")
                        .auto("format")
                        .url()}
                      width=""
                      className="m-auto sm:w-[50%] sm:h-[50%] max-[639px]:w-[50%] max-[639px]:h-[50%]"
                      alt={item.node.icon.alt}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex overflow-x-hidden text-outline-marquee text-[#f8e64d] uppercase md:text-[3rem] sm:text-[1.5rem] md:leading-[114px] lg:text-[4rem] lg:leading-[114px] bg-[#f8e64d]">
          <div className="animate-marquee whitespace-nowrap">
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
            <span>Nice to unsee you·</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
