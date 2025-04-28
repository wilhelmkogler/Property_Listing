import PropertyCard from "../components/PropertyCard";

function Browse({ darkMode }) {
  const properties = [
    {
      img: "/img/out1.jpg",
      title: "Modern Mansion",
      location: "Madrid, Spain",
      size: "150 m²",
      price: "525.000 €",
    },
    {
      img: "/img/out2.jpg",
      title: "Family House",
      location: "Seville, Spain",
      size: "112 m²",
      price: "310.000 €",
    },
    {
      img: "/img/out3.jpg",
      title: "Modern Villa",
      location: "Valencia, Spain",
      size: "138 m²",
      price: "435.000 €",
    },
    {
      img: "/img/out4.jpg",
      title: "Townhouse",
      location: "Madrid, Spain",
      size: "95 m²",
      price: "275.000 €",
    },
    {
      img: "/img/out5.jpg",
      title: "Contemporary Home",
      location: "Granada, Spain",
      size: "50 m²",
      price: "195.000 €",
    },
    {
      img: "/img/out6.jpg",
      title: "Cozy Detached House",
      location: "Zaragoza, Spain",
      size: "78 m²",
      price: "229.000 €",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-center m-8">
        Available Houses
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((p, i) => (
          <PropertyCard
            key={i}
            img={p.img}
            title={p.title}
            location={p.location}
            size={p.size}
            price={p.price}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
}

export default Browse;
