/**
 *
 *  Gulp nandomoreira.me
 *
 */

'use strict';

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var pngquant    = require('imagemin-pngquant');
var runSequence = require('run-sequence');
var bSync       = require('browser-sync');
var cp          = require('child_process');
var reload      = bSync.reload;

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
      interlaced: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant({quality: '65-80', speed: 4})]
    })))
    .pipe(gulp.dest('assets/images'))
    .pipe($.size({title: 'images'}));
})

.task('fonts', function () {
  return gulp.src(['_src/fonts/**'])
    .pipe(gulp.dest('assets/fonts'))
    .pipe($.size({title: 'fonts'}));
})

.task('lint', function() {
  return gulp.src('_src/js/main.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('default', { verbose: true }));
})

.task('js', function() {
  return gulp.src([
    '_src/js/vendor/classie.js',
    '_src/js/vendor/jquery.min.js',
    '_src/js/vendor/jquery.github.js',
    '_src/js/vendor/jquery.swipebox.js',
    '_src/js/vendor/jekyll-search.js',
    '_src/js/modal.js',
    '_src/js/main.js'
  ])
  .pipe($.concat('main.js'))
  .pipe($.uglify())
  .pipe($.rename({ suffix: ".min" }))
  .pipe($.size({title: 'scripts'}))
  .pipe(gulp.dest('assets/js'));
})

.task('sass', function () {
  gulp.src('_src/sass/main.scss')
    .pipe($.compass({
      config_file: './config.rb',
      css: 'assets/css',
      sass: '_src/sass'
    }))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe($.minifyCss())
    .pipe($.rename({ suffix: ".min" }))
    .pipe($.size({title: 'styles'}))
    .pipe(gulp.dest('assets/css'));
})

.task('jekyll', function (done) {
  bSync.notify('Compiling Jekyll');
  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--watch']).on('close', done);
})

.task('serve', ['sass'], function () {
  bSync({
    notify: false,
    open: "external",
    logPrefix: 'browser-sync',
    server: ['_site']
  });

  gulp.watch(['_src/sass/**/*.scss'], ['sass']);
  gulp.watch(['_site/assets/js/**/*.js'], ['js', reload]);
  gulp.watch(['_site/assets/css/**/*.css'], [reload]);
  gulp.watch(['_site/assets/images/**/*'], reload);
})
;
