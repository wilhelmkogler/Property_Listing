import { Link } from "react-router-dom";

function PropertyCard({ img, title, location, size, price }) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-5 text-center hover:-translate-y-6 transition-transform duration-300">
        <img
          src={img}
          alt={title}
          className="w-full h-44 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 my-2">{location}</p>
        <p className="text-base font-bold text-gray-900 mb-4">
          {size} – {price}
        </p>
        <Link
          to="/product"
          className="inline-block px-5 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black border border-black transition"
        >
          View
        </Link>
      </div>
    );
  }
  
  export default PropertyCard;
  