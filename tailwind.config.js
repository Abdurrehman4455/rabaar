/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"], // for logo, titles
        body: ["Inter", "sans-serif"],      // for nav, text
      },
    },
  },
  plugins: [],
};