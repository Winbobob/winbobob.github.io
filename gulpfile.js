/**
 *
 *  Gulp nandomoreira.me
 *
 */

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('default', ['sass'], function (cb) {
  runSequence('js', ['images', 'fonts', 'serve', 'jekyll'], cb);
})

.task('images', function () {
  return gulp.src('_src/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('assets/images'))
    .pipe($.size({title: 'images'}));
})

.task('fonts', function () {
  return gulp.src(['_src/fonts/**'])
    .pipe(gulp.dest('assets/fonts'))
    .pipe($.size({title: 'fonts'}));
})

.task('js', function() {
  return gulp.src([
    '_src/js/vendor/jquery.min.js',
    '_src/js/vendor/jquery.swipebox.js',
    '_src/js/main.js'
  ])
  .pipe($.concat('main.js'))
  .pipe($.uglify())
  .pipe($.rename({ suffix: ".min" }))
  .pipe(gulp.dest('assets/js'))
  .pipe($.size({title: 'scripts'}));
})

.task('sass', function () {
  return gulp.src('_src/sass/main.scss')
    .pipe($.rubySass({
      'compass'        : true,
      'noCache'        : true,
      'style'          : 'compressed', // nested - expanded - compact - compressed
      'precision'      : 10,
      'sourcemap=none' : true
    }))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe($.minifyCss())
    .pipe($.rename({ suffix: ".min" }))
    .pipe(gulp.dest('assets/css'))
    .pipe($.size({title: 'styles'}));
})

.task('jekyll', function () {
  return gulp.src('*').pipe($.shell(['jekyll build --watch']));
})

.task('serve', ['sass'], function () {
  browserSync({
    notify: false,
    open: "external",
    logPrefix: 'nme',
    server: ['_site']
  });

  gulp.watch(['_src/sass/**/*.scss'], ['sass']);
  gulp.watch(['_site/assets/js/**/*.js'], ['js', reload]);
  gulp.watch(['_site/assets/css/**/*.css'], [reload]);
  gulp.watch(['_site/assets/images/**/*'], reload);
})
;
