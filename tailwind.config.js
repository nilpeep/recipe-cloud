/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat', sans-serif"],
      },
      colors: {
        main: "#FF9636",
        navbarColor: "#DAD870",
      },
      fontSize: {
        label: [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "500",
          },
        ],
      },
      boxShadow: {
        login: "2px 5px 10px 0px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
