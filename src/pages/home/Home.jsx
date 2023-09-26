import React from "react";
import Donations from "../../components/donations/Donations";

const Home = () => {
  return (
    <div className="mt-14">
      <div className="hero-bg">
        <div className="pt-20 pb-28 bg-[#ffffffee]">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] text-black font-bold text-center mt-12 mb-10 px-2 md:px-0">
            I Grow By Helping People In Need
          </h2>
          <div className="bg-gray-400 w-80 sm:w-80 md:w-96 mx-auto flex border overflow-hidden rounded-lg mb-20">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-white py-2 md:py-[11px] px-4 w-60 sm:w-72 md:w-80 outline-none"
            />
            <button className="bg-red-400 sm:font-medium text-white px-4 md:px-7 pb-px">
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <Donations />
      </div>
    </div>
  );
};

export default Home;
