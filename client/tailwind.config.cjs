/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange': '#feb931',
        'white': '#fff',
        'linkBlue': '#5491d2',
        'red': '#ff0000',
        'textGray': '#797979',
        'darkGray': '#060606',
        'lightGray': '#222222',
      },
    },
  },
  variants: {},
  plugins: [],
}; 