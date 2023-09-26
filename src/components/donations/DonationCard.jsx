import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const { id, image, title, category, cardBg, categoryBg, textColor } =
    donation;
  return (
    <Link to={`/details/${id}`}>
      <div
        style={{ background: cardBg }}
        className="rounded-lg overflow-hidden cursor-pointer"
      >
        <img
          src={image}
          className="w-full h-48 sm:h-44 md:h-52 lg:h-40 mb-5 bg-gray-800 rounded-t-lg"
          alt=""
        />
        <div className="pl-4">
          <span
            style={{ background: categoryBg, color: textColor }}
            className="py-1 px-3 text-sm font-medium rounded-[5px]"
          >
            {category}
          </span>
          <h2
            style={{ color: textColor }}
            className="text-lg font-semibold pt-2 pb-3"
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default DonationCard;
