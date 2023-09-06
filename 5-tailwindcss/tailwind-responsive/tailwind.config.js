/** @type {import('tailwindcss').Config} */
module.exports = {

    content: [
      "./src/*.{html,js}",
      "./src/**/*.{html,js}",
      "./src/**/**/*.{html,js}",
  ],
  
  darkMode: 'class',
  theme: {
    extend: {
      colors : {
        "primary" : "#2d6cdf",
        "secondary" : "#46c3db",
      },
      fontFamily: {
        'open-sans': ['Open Sans','Padauk'],
        'roboto' : ['Roboto', 'Padauk'],
        'padauk' : ['Padauk', 'sans-serif']
      },

    },
  },
  plugins: [
  
]
}

