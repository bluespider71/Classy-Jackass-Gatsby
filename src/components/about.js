import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

// import Eyebrow from "./eyebrow";
// import AwardBadge from "../images/award-badge.svg";

const About = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     aboutimage: file(relativePath: { eq: "about.png" }) {
  //       childImageSharp {
  //         gatsbyImageData(
  //           width: 592
  //           placeholder: BLURRED
  //           formats: [AUTO, WEBP, AVIF]
  //         )
  //       }
  //     }
  //   }
  // `);
  return (
    <div id="about">
      <div className="pt-[11%] pl-[11.6%]">
        <p
          className="font-['Roboto'] font-[400] md:text-[2rem] max-[768px]:text-[1.5rem]
          min-[768px]:leading-[40px] max-[767px]:leading-[30px] text-black"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        {/* <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 lg:py-32 py-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="font-display md:text-display-xl text-display-md font-normal pb-4">
            </h2>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 relative">
            <GatsbyImage
              image={getImage(data.aboutimage)}
              alt="Interior Design"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default About;
