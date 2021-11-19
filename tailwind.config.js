const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["IBM Plex Sans Arabic", ...fontFamily.sans],
      },
      colors: {
        primary: {
          200: "#e1e8f0",
          500: "#40407a",
        },
        secondary: {
          400: "",
          500: "",
        },
      },
      gridTemplateColumns: {
        auto: "auto auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
