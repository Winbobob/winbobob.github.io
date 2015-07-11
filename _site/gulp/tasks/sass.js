var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

/*
 * paths
 */
var paths = {
  css  : 'assets/css',
  scss : 'src/scss'
};


/**
 * task for sass
 */

gulp.task('sass', function() {
  gulp.src(paths.scss + '/*.scss')
    .pipe($.plumber())
    .pipe($.rubySass({
      'compass'        : true,
      'noCache'        : true,
      'style'          : 'nested', // nested - expanded - compact - compressed
      'precision'      : 10,
      'sourcemap=none' : true
    }))
    .pipe($.size({ gzip: false, showFiles: true }))
    .pipe(gulp.dest(paths.css))
    .pipe($.minifyCss())
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.size({ gzip: false, showFiles: true }))
    .pipe(gulp.dest(paths.css))
    .pipe($.plumber.stop());
});
