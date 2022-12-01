/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#fc0303",
        "light-gray": "#666",
        "light-black": "#111",
      },
      padding: {},
      screens: {
        tablet: "880px",
        notebook: "1180px",
        "big-tablet": "1115px",
      },
      spacing: {
        "header-height": "68px",
        "aside-width": "230px",
        "videos-aside-width": "440px",
      },
    },
  },
  plugins: [],
};
