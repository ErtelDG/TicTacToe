/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
   content: [
      "./pages/**/*.{html,js}",
      "./components/**/*.{html,js}",
      "./build/**/*.{html,js}",
   ],
   theme: {
      colors: {
         transparent: "transparent",
         current: "currentColor",
         black: colors.black,
         white: colors.white,
         gray: colors.gray,
         emerald: colors.emerald,
         indigo: colors.indigo,
         yellow: colors.yellow,
         orange: colors.orange,
         green: colors.green,
      },
      extend: {},
   },
   plugins: [],
};
