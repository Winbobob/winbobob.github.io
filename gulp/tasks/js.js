var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

/*
 * paths
 */
var paths = {
  dest : 'assets/js',
  src  : [
    'src/js/vendor/*.js',
    'src/js/main.js'
  ]
};


/**
 * task for javascripts
 */

gulp.task('js', function() {
  gulp.src(paths.src)
    .pipe($.plumber())
    .pipe($.concat('main.js'))
    .pipe($.size({ gzip: false, showFiles: true }))
    .pipe(gulp.dest(paths.dest))
    .pipe($.uglify())
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.size({ gzip: false, showFiles: true }))
    .pipe(gulp.dest(paths.dest))
    .pipe($.plumber.stop());
});
