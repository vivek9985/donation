import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Details = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const details = useLoaderData();
  useEffect(() => {
    const findDetail = details.find((detail) => detail.id == id);
    setDetail(findDetail);
  }, []);

  const addedToDonations = () => {
    const allDonations = [];
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (!donationItems) {
      allDonations.push(detail);
      localStorage.setItem("donations", JSON.stringify(allDonations));
      swal("Good job!", "You have donated successfully", "success");
    } else {
      const isExist = donationItems.find(
        (donation) => donation.id == detail.id
      );
      if (!isExist) {
        allDonations.push(...donationItems, detail);
        localStorage.setItem("donations", JSON.stringify(allDonations));
        swal("Good job!", "You have donated successfully", "success");
      } else {
        swal("Sorry!", "You have already donated", "error");
      }
    }
  };

  return (
    <div className="w-10/12 mx-auto mt-10">
      <div
        style={{
          backgroundImage: `url(${detail.cover})`,
        }}
        className="w-full h-60 sm:h-80 md:h-96 lg:h-[550px] rounded-md overflow-hidden bg-no-repeat bg-cover bg-center object-cover relative"
      >
        <div className="bg-[#0B0B0B80] w-full flex items-center absolute bottom-0">
          <button
            onClick={addedToDonations}
            style={{ background: detail.textColor }}
            className="text-sm md:text-base text-white py-1.5 md:py-2 px-5 md:px-6 rounded-md ml-7 my-5 md:my-6 lg:my-8"
          >
            Donate <span>$290</span>
          </button>
        </div>
      </div>
      <h2 className="text-3xl text-[#0B0B0B] font-bold mt-10 mb-4">
        {detail.title}
      </h2>
      <p className="mb-10 text-[#0B0B0BB2]">{detail.desc}</p>
    </div>
  );
};

export default Details;