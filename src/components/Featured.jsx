import { Link } from "react-router-dom";

function Featured({ darkMode }) {
  return (
    <section className={`${darkMode ? "bg-sotet" : "bg-white"} px-6 py-10`}>
      <h2
        className={`text-3xl md:text-4xl text-center font-bold mb-12 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Featured Properties
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div
          className={`${
            darkMode
              ? "bg-sotet"
              : "bg-white drop-shadow-[0px_0px_8px_rgba(0,0,0,0.3)]"
          } rounded-xl p-5 text-center`}
        >
          <img
            src="/img/out1.jpg"
            alt="Modern Mansion"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3
            className={`${
              darkMode ? "text-white" : "text-gray-900"
            } text-lg font-semibold`}
          >
            Modern Mansion
          </h3>
          <p className={`${darkMode ? "text-gray-300" : "text-sotet"}`}>
            Madrid, Spain
          </p>
          <p
            className={`${
              darkMode ? "text-white" : "text-gray-800"
            } font-bold mt-2`}
          >
            150 m² – 525,000 €
          </p>
          <Link
            to="/product"
            className={`${
              darkMode ? "bg-white text-sotet" : "bg-sotet text-white"
            } inline-block mt-4 px-4 py-2 rounded-md text-sm transition-transform duration-400 hover:-translate-y-2`}
          >
            View
          </Link>
        </div>

        <div
          className={`${
            darkMode
              ? "bg-sotet"
              : "bg-white drop-shadow-[0px_0px_8px_rgba(0,0,0,0.3)]"
          } rounded-xl p-5 text-center`}
        >
          <img
            src="/img/out2.jpg"
            alt="Modern House"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3
            className={`${
              darkMode ? "text-white" : "text-gray-900"
            } text-lg font-semibold`}
          >
            Modern House
          </h3>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Seville, Spain
          </p>
          <p
            className={`${
              darkMode ? "text-white" : "text-gray-800"
            } font-bold mt-2`}
          >
            120 m² – 385,000 €
          </p>
          <Link
            to="/product"
            className={`${
              darkMode ? "bg-white text-sotet" : "bg-sotet text-white"
            } inline-block mt-4 px-4 py-2 rounded-md text-sm transition-transform duration-400 hover:-translate-y-2`}
          >
            View
          </Link>
        </div>

        <div
          className={`${
            darkMode
              ? "bg-sotet"
              : "bg-white drop-shadow-[0px_0px_8px_rgba(0,0,0,0.3)]"
          } rounded-xl p-5 text-center`}
        >
          <img
            src="/img/out3.jpg"
            alt="Modern Villa"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3
            className={`${
              darkMode ? "text-white" : "text-gray-900"
            } text-lg font-semibold`}
          >
            Modern Villa
          </h3>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Valencia, Spain
          </p>
          <p
            className={`${
              darkMode ? "text-white" : "text-gray-800"
            } font-bold mt-2`}
          >
            138 m² – 435,000 €
          </p>
          <Link
            to="/product"
            className={`${
              darkMode ? "bg-white text-sotet" : "bg-sotet text-white"
            } inline-block mt-4 px-4 py-2 rounded-md text-sm transition-transform duration-400 hover:-translate-y-2`}
          >
            View
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Featured;
