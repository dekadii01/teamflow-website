/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/js/app.js",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: "class",
  theme: {
    container: {
      padding: "16px",
      center: true,
    },
    extend: {
      animation: {
        updown: "moveUpDown 4s infinite ease-in-out",
      },
      colors: {
        clifford: "#da373d",
        primary: "rgb(30 41 59)",
      },
      keyframes: {
        moveUpDown: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
