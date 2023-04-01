import React from "react";

export const NewsLetter = () => {
  return (
    <section
      className="lg:max-w-[1920px]  md:w-11/12 w-full  md:px-16 sm:px-8 py-14 px-4 mx-auto mt-20 bg-main-gradient
    bg-gradient-to-r from-[#AE67FA] to-[#F49867] justify-between md:rounded-xl sm:flex-row flex-col sm:gap-0 gap-6
    flex"
    >
      <div>
        <p className="sm:text-[16px] text-[13px]">
          Request Early Access to Get Started
        </p>
        <h5 className="md:text-[29px] sm:text-[18px] text-[17px] font-extrabold mt-3">
          Register today & start exploring the endless possiblities.
        </h5>
      </div>
      <button className="bg-black  md:px-14 px-10 sm:py-0 py-10  text-white outline-none border-none rounded-full font-bold sm:whitespace-nowrap">
        Get Started
      </button>
    </section>
  );
};
