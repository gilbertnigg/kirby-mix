
module.exports = {
  purge: {
    content: [
      './public/site/plugins/**/*.php',
      './public/site/snippets/**/*.php',
      './public/site/templates/**/*.php',
      './src/scripts/**/*.js',
    ],
    options: {
      whitelist: ['is-selected', 'is-open'],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
