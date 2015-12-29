/*
 * gulp sass
 */

var config = require('../config.json');
var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

gulp.task('scss-lint', function() {
  return $.scssLint({
    shell: 'bash',
    src: config.sass + '**/*.scss',
    config: '.scss-lint.yml',
    reporterOutput: '.scss-lint-report.json'
  });
});

gulp.task('sass', ['scss-lint'], function () {
  return $.rubySass(config.sass + 'main.scss', {
      "precision": 6,
      "stopOnError": false,
      "sourcemap=none": true
    })
    .on('error', $.rubySass.logError)
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