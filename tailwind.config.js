module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "berkeley-blue": "#003262",
        "berkeley-blue-dark": "#001f3f",
        "california-gold": "#FDB515",
        "california-gold-dark": "#C99700",
        cream: "#FAF8F3",
        ink: "#0F1A2B",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(0, 50, 98, 0.18)",
        gold: "0 4px 24px -8px rgba(253, 181, 21, 0.45)",
      },
    },
  },
  plugins: [],
};
