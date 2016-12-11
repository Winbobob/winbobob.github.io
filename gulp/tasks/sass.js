/*
 * gulp sass
 */

var config = require('../config.json');
var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

gulp.task('sass', function () {
  return gulp.src(config.sass + 'main.scss')
    .pipe($.compass({
      config_file: config.compass,
      css: config.dest.css,
      sass: config.sass
    }))
    .pipe($.plumber())
    .pipe($.autoprefixer({
      browsers: config.autoprefixer_browsers
    }))
    .pipe($.mergeMediaQueries({
      log: false
    }))
    .pipe($.size({ title: 'Styles', gzip: false, showFiles: true }))
    // .pipe(gulp.dest(config.dest.css))
    .pipe($.minifyCss({
      processImport: true
    }))
    // .pipe($.rename({suffix: '.min'}))
    .pipe($.size({ title: 'Styles', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dest.css))
    .pipe($.plumber.stop());
});