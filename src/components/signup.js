import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
// import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

// import AwardBadge from "../images/award-badge.svg";

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const _handleSubmit = async (e) => {
    e.preventDefault();
    let listFields = {
      FNAME: fname,
      LNAME: lname,
      EMAIL: email,
    };
    const result = await addToMailchimp(email, listFields);
    if (result && result.result === "success") {
      alert(result.msg);
      setFname("");
      setLname("");
      setEmail("");
    }
  };

  return (
    <div id="signup">
      <div className="pt-[18%] max-lg:pt-0 pb-[10%]">
        <div className="text-center">
          <h2 className="font-['Roboto'] font-[500] sm:text-[61px] text-[40px] leading-[150px]">
            JOIN THE MISSION
          </h2>
        </div>
        <div className="border-t-[1px] border-black w-[25%] m-auto"></div>
      </div>
      <div className="w-full">
        <form
          className="border-t-[1px] border-b-[1px] border-solid border-[#efefef] px-4 pt-6 pb-8 mb-4"
          onSubmit={_handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-[#333333] text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name <span className="text-[#ff273e]">*</span>
            </label>
            <div className="flex gap-5">
              <div className="basis-1/2">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#d9d9d9]"
                  id="fname"
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder=""
                />
                <span className="text-sm">First</span>
              </div>
              <div className="basis-1/2">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#d9d9d9]"
                  id="lname"
                  type="text"
                  placeholder=""
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
                <span className="text-sm">Last</span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email <span className="text-[#ff273e]">*</span>
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline border-[#d9d9d9]"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#eeeeee] hover:bg-blue-700 text-[#333333] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
