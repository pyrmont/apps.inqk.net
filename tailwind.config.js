module.exports = {
  purge: [
    'public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
