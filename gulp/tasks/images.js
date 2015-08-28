/**
 * gulp images
 */

var config = require('../config.json');
var gulp = require('gulp');
var quant = require('imagemin-pngquant');
var $ = require('gulp-load-plugins')();

gulp.task('images', function () {
  return gulp.src(config.img + '/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [quant({
        quality: '65-80',
        speed: 4
      })]
    })))
    .pipe(gulp.dest(config.dest.img))
    .pipe($.size({
      title: 'images'
    }));
})