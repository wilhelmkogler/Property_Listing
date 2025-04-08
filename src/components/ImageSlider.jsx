import { useState } from "react";

function ImageSlider() {
  const images = [
    "/img/out1.jpg",
    "/img/2.jpg",
    "/img/4.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeImage = (index) => {
    if (index === currentIndex) return;

    setIsFading(true);

    setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, 300);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    changeImage(newIndex);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mb-12">
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt="Property"
          className={`absolute w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl text-black  hover:bg-white/60 p-2 rounded-full z-10"
        >
          &#10094;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl text-black  hover:bg-white/60 p-2 rounded-full z-10"
        >
          &#10095;
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex flex-wrap justify-between gap-3">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i + 1}`}
            onClick={() => changeImage(i)}
            className={`w-[150px] h-[80px] object-cover rounded-md cursor-pointer border-2 transition ${
              currentIndex === i ? "border-black" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
