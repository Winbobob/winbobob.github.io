/*
 * gulp build
 */

var config = require('../config.json');
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {
  runSequence(['sass', 'js', 'images', 'fonts', 'serve'], cb);
});