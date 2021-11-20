module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          200: "#304D63",
          500: "#304D63",
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
