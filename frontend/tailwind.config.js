/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "regal-blue": "#0A1A56",
        "light-vit": "#2A255E",
        "border-vit": "#E2E1E0",
        "button-vit": "#8C8CDA",
        "card-vit": "#2A255E",
      },
      fontFamily: {
        robo: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
