
module.exports = {
  // Turn on jus-in-time
  // Don't use it with corePlugins / IE support
  // mode: 'jit',
  // Better IE support
  corePlugins: {
    textOpacity: false,
    borderOpacity: false,
    backgroundOpacity: false,
  },
  // Purge files
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
    fontFamily: {
      sans: ['Helvetica', 'Roboto', 'sans-serif'],
    },
    screens: {
      'xs': [
        { 'max': '639px' },
      ],
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.4' }],
      sm: ['0.875rem', { lineHeight: '1.4' }],
      base: ['1rem', { lineHeight: '1.4' }],
      lg: ['1.125rem', { lineHeight: '1.4' }],
      xl: ['1.25rem', { lineHeight: '1.3' }],
      '2xl': ['1.5rem', { lineHeight: '1.2' }],
      '3xl': ['1.875rem', { lineHeight: '1.2' }],
      '4xl': ['2.25rem', { lineHeight: '1.1' }],
    },
    extend: {
      textColor: {
        primary: '#0A0A0A',
        secondary: '#5a7e92',
      },
      colors: {
        primary: '#5a7e92',
        secondary: '#2c3d4a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
