function Cities() {
    const cities = [
      { name: "Madrid", img: "/img/city1.jpg" },
      { name: "Ibiza", img: "/img/city2.jpg" },
      { name: "Valencia", img: "/img/city3.jpg" },
      { name: "Seville", img: "/img/city4.jpg" },
    ];
  
    return (
      <section className="bg-white px-6 py-10">
        <h2 className="text-3xl text-center font-bold text-gray-900 mb-12">Browse by City</h2>
  
        <div className="max-w-6xl mx-auto grid gap-6 grid-cols-2 md:grid-cols-4">
          {cities.map((city, i) => (
            <div
              key={i}
              className="relative h-48 rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 blur-xs brightness-95"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl font-semibold">{city.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Cities;
  