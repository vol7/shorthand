'use strict';

var gulp = require('gulp'),
  jade = require('gulp-jade'),
  gulpif = require('gulp-if');

module.exports = gulp.task('index', function () {
  return gulp.src(config.paths.src.index)
    .pipe(gulpif(release,
      jade({
        locals: {styles: config.filenames.release.styles, scripts: config.filenames.release.scripts}
      }),
      jade({
        pretty: true,
        locals: {styles: config.filenames.build.styles, scripts: config.filenames.build.scripts}
      })))
    .pipe(gulpif(release,
      gulp.dest(config.paths.dest.release.index),
      gulp.dest(config.paths.dest.build.index)));
});
