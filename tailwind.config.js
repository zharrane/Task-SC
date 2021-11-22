module.exports = {
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          200: "#1C3D64",
          500: "#1C3D64",
        },
        secondary: {
          400: "#B2E7E8",
          500: "#8FB9AA",
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
