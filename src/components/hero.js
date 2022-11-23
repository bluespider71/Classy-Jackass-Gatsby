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
      },
      allSocialJson {
        nodes {
          id
          name
          href
          icon {
            publicURL
          }
        }
      },
    }
  `);

  return (
    <div>
      <div className="relative">
        <GatsbyImage image={getImage(data.heroimage)} alt="Interior Design" />
        <div className="absolute left-[19%] top-[40%]">
          <div className="social-links-buttons">
            <div className="flex flex-row items-center xl:gap-7 lg:gap-3 md:gap-3 sm:gap-3 max-[639px]:gap-2">
              {data.allSocialJson.nodes.map((node) => (
                <a
                  href={node.href}
                  key={node.name}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black rounded-[44px] xl:h-[55px] xl:w-[110px] flex items-center lg:h-[45px] lg:w-[90px] md:h-[40px] md:w-[80px] sm:h-[30px] sm:w-[60px] max-[639px]:w-[50px] max-[639px]:h-[25px] max-[478px]:w-[40px] max-[478px]:h-[20px]"
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
        
      </div>
    </div>
  );
};

export default Hero;
