let mix = require('laravel-mix');

mix.options({
    processCssUrls: false
  })
  .setPublicPath(process.env.MIX_DIST)
  .js(
    process.env.MIX_SRC + '/scripts/app.js',
    process.env.MIX_DIST + '/js/'
  )
  .postCss(
    process.env.MIX_SRC + '/styles/app.css',
    process.env.MIX_DIST + '/css/',
    [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer')
    ]
  )
  .copyDirectory(
    process.env.MIX_SRC + '/fonts/',
    process.env.MIX_DIST + '/fonts/'
  )
  .copyDirectory(
    process.env.MIX_SRC + '/images/',
    process.env.MIX_DIST + '/img/'
  )
  .browserSync({
    proxy: process.env.MIX_PROXY,
    files: [
      process.env.MIX_DIST + '/js/**/*.js',
      process.env.MIX_DIST + '/css/**/*.css',
      'data/storage/content/**/*.txt',
      'site/snippets/**/*.php',
      'site/plugins/**/*.php',
      'site/templates/*.php'
    ],
  });
