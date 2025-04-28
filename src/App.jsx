import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Product from "./pages/Product";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  return (
    <Router>
      <div
        className={
          darkMode
            ? "bg-sotet text-white min-h-screen"
            : "bg-white text-black min-h-screen"
        }
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/browse" element={<Browse darkMode={darkMode} />} />
          <Route path="/product" element={<Product darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </Router>
  );
}

export default App;
