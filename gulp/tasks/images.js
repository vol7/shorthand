'use strict';

var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  imagemin = require('gulp-imagemin');

module.exports = gulp.task('images', function () {
  return gulp.src(config.paths.src.images)
    .pipe(gulpif(release, imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.images), gulp.dest(config.paths.dest.build.images)));
});
