import { useEffect, useState } from "react";
const Donation = () => {
  const [donationItems, setDonationItems] = useState([]);
  const [noData, setNoData] = useState();
  const [isshow, setIsShow] = useState(false);

  useEffect(() => {
    const allDonations = JSON.parse(localStorage.getItem("donations"));
    if (allDonations) {
      setDonationItems(allDonations);
    } else {
      setNoData("No data found !");
    }
  }, []);

  return (
    <div className="mt-40 md:mt-32">
      {noData ? (
        <p className="h-[80vh] flex items-center justify-center text-center text-4xl font-extrabold">
          {noData}
        </p>
      ) : (
        <div className="w-10/12 mx-auto grid gap-5 grid-cols-1 lg:grid-cols-2 my-12">
          {isshow
            ? donationItems.map((donationItem) => (
                <div
                  key={donationItem.id}
                  style={{ background: donationItem.cardBg }}
                  className="h-32 md:h-48 lg:h-48 flex rounded-lg overflow-hidden"
                >
                  <img
                    src={donationItem.image}
                    className="h-full w-[140px] md:w-[250px] lg:w-[220px]"
                    alt="image"
                  />
                  <div className=" flex items-center ">
                    <div className="pl-4 pr-1 md:pl-5 w-auto">
                      <span
                        style={{
                          background: donationItem.categoryBg,
                          color: donationItem.textColor,
                        }}
                        className="py-1 px-3 text-sm font-medium rounded-[5px]"
                      >
                        {donationItem.category}
                      </span>
                      <h2 className="text-base leading-4 md:text-xl lg:text-base xl:text-xl font-bold my-1 md:my-2 xl:my-3">
                        {donationItem.title}
                      </h2>
                      <p
                        style={{ color: donationItem.textColor }}
                        className="text-sm font-semibold"
                      >
                        $<span>{donationItem.amount}.00</span>
                      </p>
                      <button
                        style={{ background: donationItem.textColor }}
                        className="text-white text-sm xl:text-base py-1 md:py-2 lg:py-1.5 px-2 md:px-5 lg:px-4 rounded-[5px] mt-1 md:mt-5 lg:mt-3 xl:mt-5"
                      >
                        View Ddetails
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : donationItems.slice(0, 4).map((donationItem) => (
                <div
                  key={donationItem.id}
                  style={{ background: donationItem.cardBg }}
                  className="h-32 md:h-48 lg:h-48 flex rounded-lg overflow-hidden"
                >
                  <img
                    src={donationItem.image}
                    className="h-full w-[140px] md:w-[250px] lg:w-[220px]"
                    alt="image"
                  />
                  <div className=" flex items-center ">
                    <div className="pl-4 pr-1 md:pl-5 w-auto">
                      <span
                        style={{
                          background: donationItem.categoryBg,
                          color: donationItem.textColor,
                        }}
                        className="py-1 px-3 text-sm font-medium rounded-[5px]"
                      >
                        {donationItem.category}
                      </span>
                      <h2 className="text-base leading-4 md:text-xl lg:text-base xl:text-xl font-bold my-1 md:my-2 xl:my-3">
                        {donationItem.title}
                      </h2>
                      <p
                        style={{ color: donationItem.textColor }}
                        className="text-sm font-semibold"
                      >
                        $<span>{donationItem.amount}.00</span>
                      </p>
                      <button
                        style={{ background: donationItem.textColor }}
                        className="text-white text-sm xl:text-base py-1 md:py-2 lg:py-1.5 px-2 md:px-5 lg:px-4 rounded-[5px] mt-1 md:mt-5 lg:mt-3 xl:mt-5"
                      >
                        View Ddetails
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      )}
      {donationItems.length > 4 && (
        <button
          onClick={() => setIsShow(!isshow)}
          className="font-semibold text-white bg-green-400 py-2 px-5 rounded-md block mx-auto mb-24"
        >
          {isshow ? "See Less" : "See All"}
        </button>
      )}
    </div>
  );
};

export default Donation;
