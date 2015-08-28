/*
 * gulp sass
 */

var config = require('../config.json');
var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

gulp.task('sass', function () {
  gulp.src(config.sass + '*.scss')
    .pipe($.plumber())
    .pipe($.compass({
      config_file: config.compass,
      css: config.dest.css,
      sass: config.sass
    }))
    .pipe($.autoprefixer({
      browsers: config.autoprefixer_browsers
    }))
    .pipe($.combineMediaQueries())
    .pipe(gulp.dest(config.dest.css))
    .pipe($.minifyCss())
    .pipe($.rename({suffix: '.min'}))
    .pipe($.size({ title: 'Styles', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dest.css))
    .pipe($.plumber.stop());
});