module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false, // 'media' or 'class'
  theme: {
    fontFamily: {
      pacifico: ['"Pacifico"', "cursive"],
      sans: ['"Metrophobic"', "sans-serif"],
    },
    extend: {
      colors: {
        "pastel-pink": "#FCB9AA",
        "pastel-pink-light": "#FFDBCC",
        "pastel-pink-dark": "#FF968A",
        "pastel-blue": "#55CBCD",
        "pastel-blue-light": "#D4F0F0",
        "pastel-white-pink": "#FFEFFF",
      },
    },
  },
  extend: {
    fontFamily: {
      pacifico: ['"Pacifico"', "cursive"],
    },
  },
  variants: { extend: {} },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")],
};
