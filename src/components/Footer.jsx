function Footer({ darkMode }) {
  return (
    <footer className={`${darkMode ? "bg-sotet" : "bg-white"} py-5 px-10`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold mb-6">
          Subscribe to our newsletter for property updates:
        </h3>
        <form className="flex justify-center flex-col md:flex-row items-center gap-4 ">
          <input
            type="email"
            placeholder="Enter your email"
            className={`${
              darkMode ? "bg-sotet text-white" : "bg-white text-sotet"
            } px-6 py-3 rounded-md w-64 border-2`}
            required
          />
          <button
            type="submit"
            className={`${
              darkMode ? "bg-white text-sotet" : "bg-sotet text-white"
            } w-full md:w-fit px-6 py-3 rounded-md text-lg transition duration-300 hover:-translate-y-2`}
          >
            Subscribe
          </button>
        </form>
        <p className={`${darkMode ? "text-white" : "text-sotet"} mt-6 text-sm`}>
          © 2025 LINEVO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
