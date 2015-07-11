var gulp = require('gulp');
var $    = require('gulp-load-plugins')();


/**
 * task for html minify
 */

gulp.task('html', function() {
  var opts = {
    conditionals: true,
    empty: true,
    cdata: true,
    comments: false,
    quotes: true,
    loose: false,
    spare: true
  };

  return gulp.src('_site/**/*.html')
    .pipe($.minifyHtml(opts))
    .pipe(gulp.dest('_site'));
});