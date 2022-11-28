import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      heroimage: file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 5120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
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
    <div id="hero">
      <div className="relative">
        <GatsbyImage image={getImage(data.heroimage)} alt="Interior Design" />
        <div className="absolute left-[19%] top-[45%] w-[21%] h-[5.2%]">
          <div className="social-links-buttons">
            <div className="flex flex-row justify-between">
              {data.allSocialJson.nodes.map((node) => (
                <a
                  href={node.href}
                  key={node.name}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black rounded-[44px] w-[28%] flex"
                >
                  <img
                    className="m-auto sm:w-[50%] sm:h-[50%] max-[639px]:w-[50%] max-[639px]:h-[50%]"
                    src={node.icon.publicURL}
                    alt={node.name}
                  />
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
