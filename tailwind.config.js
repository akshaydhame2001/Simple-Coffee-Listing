/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        tagBgClr: "#F6C768",
        btnBgClr: "#6F757C",
        priceBgClr: "#BEE3CC",
      },

      colors: {
        headingClr: "#FEF7EE",
        body: "#6F757C",
        sold: "#ED735D",
      },

      transitionProperty: {
        "background-clr": "background",
      },
    },
  },
  plugins: [],
};
