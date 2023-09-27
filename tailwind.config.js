const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },

      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E69D",
      },
      animation: {
        "span-slow": "spin 8s linear infinite",
        astronaut: "astronaut 20s ease-out infinite",
      },
      keyframes: {
        astronaut: {
          "0%": {
            transform: "translateX(0%) translateY(0%) rotate(-16deg)",
          },
          "25%": {
            transform: "translateX(12%) translateY(75%) rotate(16deg) ",
          },
          "50%": {
            transform: "translateX(-25%) translateY(150%) rotate(-16deg) ",
          },
          "75%": {
            transform: "translateX(12%) translateY(75%) rotate(16deg) ",
          },
          "100%": {
            transform: "translateX(0%) translateY(0%) rotate(-16deg)",
          },
        },
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,4) 2px, #f5f5f5 5px, #f5f5f5 100px)",
      },
      screens: {
        xl: { max: "1200px" },
        lg: { max: "991px" },
        md: { max: "767px" },
        sm: { max: "550px" },
        xsm: { max: "375px" },
      },
    },
  },
  plugins: [],
};
