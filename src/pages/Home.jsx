import Hero from "../components/Hero.jsx";
import Featured from "../components/Featured.jsx";
import Reviews from "../components/Reviews.jsx";
import Cities from "../components/Cities.Jsx";
import FAQ from "../components/Faq.jsx";

function Home({ darkMode }) {
  return (
    <>
      <Hero darkMode={darkMode} />
      <Featured darkMode={darkMode} />
      <Reviews darkMode={darkMode} />
      <Cities darkMode={darkMode} />
      <FAQ darkMode={darkMode} />
    </>
  );
}

export default Home;
