
module.exports = {
  corePlugins: {
    textOpacity: false,
    borderOpacity: false,
    backgroundOpacity: false,
  },
  // Purge files
  content: [
    './public/site/controllers/**/*.php',
    './public/site/plugins/**/*.php',
    './public/site/snippets/**/*.php',
    './public/site/templates/**/*.php',
    './src/scripts/**/*.js',
  ],
  safelist: ['is-selected', 'nav-open'],
  darkMode: 'media',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      'sans': ['Helvetica', 'sans-serif'],
    },
    fontSize: {
      'base': ['1.0rem', 1.4],
      'lg': ['1.5rem', 1.4],
      'xl': ['2rem', 1.4],
    },
    extend: {
      colors: {
        'primary': '#5b7f95',
        'secondary': '#2c3d4a',
      },
      textColor: {
        'body': '#0A0A0A',
      },
    },
  },
  plugins: [],
}

