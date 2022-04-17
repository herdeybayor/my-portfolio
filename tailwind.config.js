module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        creamy: '#fbf8f1',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      heading: ['Lilita One', 'cursive'],
      monoton: ['Monoton', 'calibri'],
      barlowCondensed: ['Barlow Condensed', 'sans-serif'],
    },
  },
  plugins: [],
}
