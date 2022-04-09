var pkg = require('./package.json'),
  gulp = require('gulp'),
  glob = require('glob'),
  minifyCSS = require('gulp-clean-css'),
  plugins = require('gulp-load-plugins')();

const sass = require('gulp-sass')(require('sass'));

var config = {
  sass: './sass/**/*.{scss,sass}',
  sassSrc: './sass/players_theme.scss',
  sassIe: './sass/ie.scss',
  sassPrint: './sass/print.scss',
  css: './css',
  js:'./scripts',
  jsSrc:'./js/players.js'
};

// Transpile, concatenate and minify scripts
function scripts() {
  return gulp.src(config.jsSrc, {"allowEmpty": true})
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(config.js));
}

// Compile styles.
function styles() {
  return gulp.src(config.sassSrc)
    .pipe(plugins.plumber())
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(plugins.concat('styles.css'))
    .pipe(gulp.dest(config.css))
    .pipe(plugins.size({title:'css'}));
}

// Watch files.
function watchFiles() {
  gulp.watch(config.sass, styles);
  gulp.watch(config.jsSrc, scripts);
}

const build = gulp.series(styles, scripts, watchFiles);
const watch = gulp.series(watchFiles);

exports.watch = watch;
exports.default = build;
