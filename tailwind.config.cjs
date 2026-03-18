/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0d1117",
        secondary: "#8b949e",
        tertiary: "#161b22",
        "black-100": "#0d1117",
        "black-200": "#161b22",
        "white-100": "#f0f6fc",
      },
      boxShadow: {
        card: "0px 20px 80px -10px rgba(20,184,166,0.12)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
