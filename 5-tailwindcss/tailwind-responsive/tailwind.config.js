/** @type {import('tailwindcss').Config} */
module.exports = {

    content: ["./src/*.{html,js}",],
  
  darkMode: 'class',
  theme: {
    extend: {
      colors : {
        "primary" : "#2d6cdf",
        "secondary" : "#46c3db",
      },
      fontFamily: {
        'open-sans': ['Open Sans','sans-serif'],
        'roboto' : ['Roboto', 'sans-serif'],
      },

    },
  },
  plugins: [
  
]
}

