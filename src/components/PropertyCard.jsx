import { Link } from "react-router-dom";

function PropertyCard({ img, title, location, size, price, darkMode }) {
  return (
    <div
      className={`${
        darkMode
          ? "bg-sotet drop-shadow-[0px_0px_4px_rgba(255,255,255,0.4)]"
          : "bg-white drop-shadow-[0px_0px_8px_rgba(0,0,0,0.3)]"
      } rounded-xl p-5 text-center hover:-translate-y-6 transition-all duration-300`}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-44 object-cover rounded-md mb-4"
      />
      <h3
        className={`${
          darkMode ? "bg-sotet" : "bg-white"
        } text-lg font-semibold`}
      >
        {title}
      </h3>
      <p className={`${darkMode ? "bg-sotet" : "bg-white"} text-sm my-2`}>
        {location}
      </p>
      <p
        className={`${
          darkMode ? "bg-sotet" : "bg-white"
        } text-base font-bold mb-4`}
      >
        {size} – {price}
      </p>
      <Link
        to="/product"
        className={`${
          darkMode ? "bg-white text-sotet" : "bg-sotet text-white"
        } inline-block px-5 py-2 rounded-md transition-transform duration-400 hover:scale-125 border border-black `}
      >
        View
      </Link>
    </div>
  );
}

export default PropertyCard;
