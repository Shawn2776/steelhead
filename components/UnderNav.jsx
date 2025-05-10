import React from "react";

const UnderNav = () => {
  return (
    <div className=" bg-white text-black hidden sm:flex">
      <div className="flex w-full h-20 justify-between items-center max-w-7xl mx-auto">
        {/* Left */}
        <div className="text-2xl">Logo</div>
        {/* Middle */}
        <div className="flex justify-evenly gap-5 text-2xl">
          <div>Home</div>
          <div>About Us</div>
          <div>Services</div>
        </div>
        {/* Right */}
        <div className="">
          <button className="btn">GET A BID</button>
        </div>
      </div>
    </div>
  );
};

export default UnderNav;
