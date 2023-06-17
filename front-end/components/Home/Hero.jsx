import React from "react";
import HeroBanner from "./HeroBanner";
import Special from "./Special";

const Hero = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-5xl flex flex-col projects-center md:projects-start md:justify-center">
        <HeroBanner />
        <a
          className={`w-full relative rounded-xl border-fun-gray border p-2 transition duration-500 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}
        >
          <img
            className="w-full rounded-md"
            src="https://assets-global.website-files.com/637610b6e8be873142dadb34/63e230272b23e25805d133c9_customer-analytics-1.jpeg"
          />
        </a>
        <Special />
      </div>
    </div>
  );
};

export default Hero;
