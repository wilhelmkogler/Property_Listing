import { Link } from "react-router-dom";

function Hero() {
    return (
        <section
        style={{
          backgroundImage: "url('/img/4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="flex items-center justify-center text-white text-center pt-[80px]"
      >
      
        {/* Áttetsző sötét overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
  
        {/* Tartalom */}
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-[5rem] md:text-[10rem] font-bold mb-6 tracking-wide">LINEVO</h1>
          <p className="text-2xl md:text-4xl mb-8">Find your perfect place to live.</p>
  
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/browse"
              className="bg-black text-white text-lg md:text-xl font-medium px-6 py-3 rounded-lg transition-transform duration-300 hover:-translate-y-2"
            >
              View Houses
            </Link>
            <Link
              to="/browse"
              className="bg-white text-black text-lg md:text-xl font-medium px-6 py-3 rounded-lg transition-transform duration-300 hover:-translate-y-2"
            >
              View Apartments
            </Link>
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;
  