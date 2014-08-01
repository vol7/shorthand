'use strict';

var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  ngAnnotate = require('gulp-ng-annotate');

module.exports = gulp.task('minify', function () {
  return gulp.src(config.paths.dest.release.scripts + '/' + config.filenames.release.scripts)
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.dest.release.scripts));
});
