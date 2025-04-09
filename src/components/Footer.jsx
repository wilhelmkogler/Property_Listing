function Footer() {
    return (
      <footer className="bg-white text-black py-5 px-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold mb-6">
            Subscribe to our newsletter for property updates:
          </h3>
          <form className="flex justify-center flex-col md:flex-row items-center gap-4 ">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-md text-gray-900 w-64 border-2"
              required
            />
            <button
              type="submit"
              className="bg-black text-white w-full md:w-fit px-6 py-3 rounded-md text-lg transition duration-300 hover:-translate-y-2"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-sm text-black">© 2025 LINEVO. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  