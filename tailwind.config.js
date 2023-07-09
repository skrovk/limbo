/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./images/*.png",
],
  theme: {
    extend: {
      fontFamily: {
        backto1982: ['BACKTO1982', 'sans-serif'],
        arcadeclassic: ['ARCADECLASSIC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

