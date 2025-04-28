/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: '2px',
      },
      colors: {
        vilagos: "#fffff",
        sotet: "#171c1a",
      }
    },
  },
  plugins: [],
}