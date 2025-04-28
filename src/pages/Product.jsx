import ImageSlider from "../components/ImageSlider";
import PropertyDetails from "../components/PropertyDetails";

function Product({ darkMode }) {
  return (
    <main className="px-4 py-20 max-w-6xl mx-auto">
      <ImageSlider />

      <PropertyDetails darkMode={darkMode} />
    </main>
  );
}

export default Product;
