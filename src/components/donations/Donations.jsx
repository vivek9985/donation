import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";

const Donations = () => {
  const donations = useLoaderData();
  return (
    <div className="w-10/12 mx-auto py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
        {donations.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default Donations;
