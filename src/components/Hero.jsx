import { Link } from "react-router-dom";

function Hero({ darkMode }) {
  return (
    <section className="relative flex items-center justify-center text-white text-center pt-[80px] overflow-hidden h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/4.jpg')",
          filter: darkMode ? "brightness(50%)" : "brightness(100%)",
          transition: "filter 0.5s ease",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-[5rem] md:text-[10rem] font-bold mb-6 tracking-wide">
          LINEVO
        </h1>
        <p className="text-2xl md:text-4xl mb-8">
          Find your perfect place to live.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/browse"
            className="bg-sotet text-white w-[200px] md:w-[250px] text-lg md:text-xl font-medium px-6 py-3 rounded-lg transition-transform duration-300 hover:-translate-y-2"
          >
            View Houses
          </Link>
          <Link
            to="/browse"
            className="bg-white text-black w-[200px] md:w-[250px] text-lg md:text-xl font-medium px-6 py-3 rounded-lg transition-transform duration-300 hover:-translate-y-2"
          >
            View Apartments
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
