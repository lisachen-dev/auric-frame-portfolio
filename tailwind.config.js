module.exports = {
  darkMode: "class", // ✅ Enables dark mode via class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Chonburi", "serif"],
        title: ["Raleway", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
