/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./wp.html",
    "./chart.html",
    "./chart.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "wp.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
