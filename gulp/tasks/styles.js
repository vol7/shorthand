'use strict';

var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  rename = require('gulp-rename'),
  csso = require('gulp-csso'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-ruby-sass');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = gulp.task('styles', function () {
  return gulp.src(config.paths.src.styles)
    .pipe(sass({
      loadPath: ['bower_components']
    }).on('error', handleError))
    .pipe(autoprefixer('last 1 version', '> 1%', 'ie 8', 'ie 7'))
    .pipe(gulpif(release, csso()))
    .pipe(gulpif(release, rename(config.filenames.release.styles), rename(config.filenames.build.styles)))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.styles), gulp.dest(config.paths.dest.build.styles)));
});
