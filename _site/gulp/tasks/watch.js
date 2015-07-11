var gulp  = require('gulp');
var $     = require('gulp-load-plugins')();
var path  = require('path');
var bSync = require('browser-sync').create();

/*
 * paths
 */
var paths = {
	dist : 'assets',
	site : '_site',
  src: {
		js   : 'src/js/**/*.js',
		scss : 'src/scss/**/*.scss'
  }
};

/**
 * watch
 */

gulp.task('watch', function() {

  // browser sync init
  // bSync.init({
  //   server: paths.site
  // });

  // watch sass
  gulp.watch(paths.src.scss, ['sass']);

  // watch js
  gulp.watch(paths.src.js, ['js']);

  // reload all browsers
  // gulp.watch([ paths.site + '/**/*', paths.dist + '/**/*' ]).on('change', bSync.reload);

});
