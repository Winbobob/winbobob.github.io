/*
 * gulp sass
 */

var config = require('../config.json');
var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

var lintFiles = [
  config.sass + '**/*.scss',
  "!" + config.sass + 'base/_normalize.scss',
  "!" + config.sass + 'components/_swipebox.scss',
  "!" + config.sass + 'components/_syntax.scss',
  "!" + config.sass + 'components/_selection-sharer.scss',
  "!" + config.sass + 'bourbon/**/*.scss',
  "!" + config.sass + 'font-awesome/**/*.scss'
];

gulp.task('scss-lint', function() {
  gulp.src(lintFiles)
  .pipe($.scssLint({
    // shell: 'bash',
    config: '.scss-lint.yml',
    reporterOutput: '.scss-lint-report.json'
  }));
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