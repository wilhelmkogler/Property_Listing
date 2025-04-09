import { Link } from "react-router-dom";

function Featured() {
    return (
      <section className="bg-white px-6 py-10">
        <h2 className="text-3xl text-center font-bold text-gray-900 mb-12">
          Featured Properties
        </h2>
  
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-5 text-center">
            <img
              src="/img/out1.jpg"
              alt="Modern Mansion"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Modern Mansion</h3>
            <p className="text-gray-600">Madrid, Spain</p>
            <p className="font-bold text-gray-800 mt-2">150 m² – 525,000 €</p>
            <Link
              to="/product"
              className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-md text-sm transition-transform duration-400 hover:-translate-y-2"
            >
              View
            </Link>
          </div>
  
          {/* Card 2 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-5 text-center">
            <img
              src="/img/out2.jpg"
              alt="Modern House"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Modern House</h3>
            <p className="text-gray-600">Seville, Spain</p>
            <p className="font-bold text-gray-800 mt-2">120 m² – 385,000 €</p>
            <Link
              to="/product"
              className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-md text-sm transition-transform duration-400 hover:-translate-y-2"
            >
              View
            </Link>
          </div>
  
          {/* Card 3 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-5 text-center">
            <img
              src="/img/out3.jpg"
              alt="Modern Villa"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Modern Villa</h3>
            <p className="text-gray-600">Valencia, Spain</p>
            <p className="font-bold text-gray-800 mt-2">138 m² – 435,000 €</p>
            <Link
              to="/product"
              className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-md text-sm transition-transform duration-400 hover:-translate-y-2"
            >
              View
            </Link>
          </div>
        </div>
      </section>
    );
  }
  
  export default Featured;
  