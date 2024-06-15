/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: { 'max': '640px' }
    },
    fontFamily:{
      'roboto': ['Roboto', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif']
    }
  },
  plugins: [],
}