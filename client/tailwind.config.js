/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwindcss-animated"),
    // eslint-disable-next-line no-undef
    require("@tailwindcss/typography"),
  ],
};
