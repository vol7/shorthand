'use strict';

var gulp = require('gulp'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream');

module.exports = gulp.task('browserify', function () {
  return browserify(config.paths.src.modules)
    .transform('browserify-shim')
    .bundle()
    .pipe(source(config.filenames.release.scripts))
    .pipe(gulp.dest(config.paths.dest.release.scripts));
});
