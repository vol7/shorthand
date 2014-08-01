'use strict';

var gulp = require('gulp'),
  watchify = require('watchify'),
  browserifyShim = require('browserify-shim'),
  source = require('vinyl-source-stream');

module.exports = gulp.task('watchify', function () {
  var bundler = watchify(config.paths.src.modules);

  bundler.transform(browserifyShim);

  bundler.on('update', rebundle);

  function rebundle() {
    return bundler.bundle({ debug: true })
      .pipe(source(config.filenames.build.scripts))
      .pipe(gulp.dest(config.paths.dest.build.scripts));
  }

  return rebundle();
});
