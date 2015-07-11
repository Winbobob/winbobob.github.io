var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

/**
 * jekyll serve
 */

gulp.task('serve', function() {
  gulp.src('/*')
    .pipe($.plumber())
    .pipe($.shell([
      'jekyll serve'
    ]))
    .pipe($.plumber.stop());
});
