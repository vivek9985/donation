import { useLoaderData } from "react-router-dom";
import DonationCard from "./../../components/donations/DonationCard";
import { useState } from "react";

const Home = () => {
  const donations = useLoaderData();
  const [search, setSearch] = useState("");
  const searchCategory = () => {};
  return (
    <>
      <div className="mt-10 md:mt-14">
        <div className="hero-bg">
          <div className="pt-20 pb-12 md:pb-28 bg-[#fffffff1]">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] text-black font-bold text-center mt-12 mb-10 px-8 md:px-0">
              I Grow By Helping People In Need
            </h2>
            <div className="bg-gray-400 w-80 sm:w-80 md:w-96 mx-auto flex border overflow-hidden rounded-lg mb-20">
              <input
                onBlur={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search here..."
                className="bg-white py-2 md:py-[11px] px-4 w-60 sm:w-72 md:w-80 outline-none"
              />
              <button
                onClick={searchCategory}
                className="bg-red-400 sm:font-medium text-white px-4 md:px-7 pb-px"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {donations
            .filter((donation) => {
              return search.toLowerCase() === ""
                ? donation
                : donation.category.toLowerCase().includes(search);
            })
            .map((donation) => (
              <DonationCard
                key={donation.id}
                donation={donation}
              ></DonationCard>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
