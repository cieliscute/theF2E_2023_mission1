/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.html", "./layout/**/*.ejs", "./main.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4527A0",
          lighter: "#5b35ce",
          darker: "301b70",
        },
        secondary: {
          blue: "#26A69A",
          yellow: "#FFB300",
          pink: "#EC407A",
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
