/*
 * gulp js
 */

var config = require('../config.json');
var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

var mainfile = [
  config.js + 'main.js'
];

gulp.task('lint', function () {
  return gulp.src(mainfile)
    .pipe($.jshint())
    .pipe($.jshint.reporter('default', { verbose: true }));
})

.task('js', function () {
  gulp.src(mainfile)
    .pipe($.plumber())
    .pipe($.include()).on('error', console.log)
    .pipe($.uglify())
    .pipe($.size({ title: 'Scripts', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dest.js))
    .pipe($.plumber.stop());
});
