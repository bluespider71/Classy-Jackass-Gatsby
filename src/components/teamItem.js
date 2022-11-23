import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TeamItem = ({ name, image, role, desc }) => {
  return (
    <div className="md:col-span-4 flex flex-col text-center xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center">
      <GatsbyImage image={getImage(image)} className="width-full hover:scale-[1.1] duration-[300ms]" alt={name} />
      {/* <img src={image} className="width-full" alt={name} /> */}
      <div className="flex flex-col gap-4 pt-2">
        <p className="font-display md:text-display-sm text-display-sm font-normal">
          {name}
        </p>
        <p className="text-body-lg font-light text-neutral-700">
          {desc}
        </p>
      </div>
    </div>
  );
};

TeamItem.propTypes = {
  name: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
};

export default TeamItem;