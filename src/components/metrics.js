import React from "react";

const Metrics = () => {
  return (
    <div>
      <div className="mx-auto mb-10">
        <div className="flex sm:flex-row flex-col gap-3">
          <div className="basis-1/3">
            <p className="font-display md:text-display-lg text-display-md font-normal text-center">
              150
            </p>
            <p className="text-body-sm font-normal tracking-wider pt-2 text-center">
              HAND DRAWN <br></br>TRAITS
            </p>
          </div>
          <div className="basis-1/3">
            <p className="font-display md:text-display-lg text-display-md font-normal text-center">
              30%
            </p>
            <p className="text-body-sm font-normal tracking-wider pt-2 text-center">
              OF ALL REVENUE <br></br>DONATED DIRECTLY TO OUR CHARITY <br></br>
              PARTNERS
            </p>
          </div>
          <div className="basis-1/3">
            <p className="font-display md:text-display-lg text-display-md font-normal text-center">
              5k
            </p>
            <p className="text-body-sm font-normal tracking-wider pt-2 text-center">
              INITIAL DONATION <br></br>TO GET THINGS<br></br>STARTED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Metrics;
