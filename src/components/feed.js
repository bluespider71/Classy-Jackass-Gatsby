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
        <div className="flex flex-col">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8 pb-10 md:pb-20">
              <Eyebrow label="Feed" />
              <h2 className="font-display md:text-display-xl text-display-md pt-5">
                {/* We provide the <span className="italic">best solutions</span>{" "}
                for your dream home */}
              </h2>
            </div>
          </div>
          <div className="relative left-0 right-0">
            <div className="bg-black md:h-[200px] max-[768px]:h-[100px]"></div>
            <div className="absolute left-[30px] top-[30px]">
              <GatsbyImage
                image={getImage(data.feedimage)}
                alt="feed Image"
                className="rounded-full border-[8px] border-solid border-white hover:scale-[1.1] duration-[300ms] md:w-full max-[768px]:w-2/4"
              />
            </div>
            <div className="mt-[30px] w-[150px] float-right">
              <Button
                label="Follow"
                link="#11"
                className={"bg-black rounded-full"}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 pt-[90px] max-[768px]:pt-[30px] px-[30px]">
            <h3 className="font-display md:text-display-lg max-[768px]:text-[23px] text-display-md">
              ClassyJackass
            </h3>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 px-[30px]">
            <h4 className="font-display md:text-display-md max-[768px]:text-[23px] text-display-md">
              @ClassyJackass
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feed;
