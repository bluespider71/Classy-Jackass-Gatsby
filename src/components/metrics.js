import React from "react";

const Metrics = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex sm:flex-row flex-col gap-5">
          <div className="basis-1/3">
            <p className="font-display md:text-display-lg text-display-lg font-normal">
              150
            </p>
            <p className="text-body-sm font-normal tracking-wider pt-2">
              HAND DRAWN <br></br>TRAITS
            </p>
          </div>
          <div className="basis-1/3">
            <p className="font-display md:text-display-lg text-display-lg font-normal">
              30%
            </p>
            <p className="text-body-sm font-normal tracking-wider pt-2">
              OF ALL REVENUE <br></br>DONATED DIRECTLY TO OUR CHARITY <br></br>
              PARTNERS
            </p>
          </div>
          <div className="basis-1/3">
            <p className="font-display md:text-display-lg text-display-lg font-normal">
              5k
            </p>
            <p className="text-body-sm font-normal tracking-wider pt-2">
              INITIAL DONATION <br></br>TO GET THINGS<br></br>STARTED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Metrics;
