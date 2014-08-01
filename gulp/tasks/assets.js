'use strict';

var gulp = require('gulp'),
  gulpif = require('gulp-if');

module.exports = gulp.task('assets', function () {
  return gulp.src(config.paths.src.assets)
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.assets), gulp.dest(config.paths.dest.build.assets)));
});
