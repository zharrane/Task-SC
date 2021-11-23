module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          500: "#002e39",
          700: "#1C3D64",
          200: "#0f3942",
        },
        secondary: {
          400: "#B2E7E8",
          600: "#8FB9AA",
          700: "#00c4f5",
          500: "#0f3942",
          800: "#00afe7",
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
