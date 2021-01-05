let mix = require('laravel-mix');

mix.js('src/scripts/app.js', 'public/assets/js')
  .setPublicPath('public/assets')
  .postCss('src/styles/app.css', 'public/assets/css', [
    require('autoprefixer'),
    require('tailwindcss')
  ])
  .copyDirectory('src/fonts', 'public/assets/fonts')
  .copyDirectory('src/images', 'public/assets/img')
  .browserSync({
    proxy: process.env.MIX_PROXY_LOCAL,
    files: [
      'public/assets/css/**/*.css',
      'public/assets/js/**/*.js',
      'public/content/**/*.txt',
      'public/site/plugins/**/*.php',
      'public/site/snippets/**/*.php',
      'public/site/templates/*.php'
    ],
  });
