'use strict';

var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  livereloadServer = livereload(config.ports.livereloadServer);

module.exports = gulp.task('watch', function () {
  gulp.watch(config.paths.src.livereload).on('change', function (file) {
    livereloadServer.changed(file.path);
  });
  // TODO: Find a proper way to ignore "possible EventEmitter memory leak detected", handled by maxListeners ATM
  gulp.watch(config.paths.src.scripts, { maxListeners: 999999 }, ['lint']);
  gulp.watch(config.paths.src.index, { maxListeners: 999999 }, ['index']);
  gulp.watch(config.paths.src.templates, { maxListeners: 999999 }, ['templates']);
  gulp.watch(config.paths.src.styles, { maxListeners: 999999 }, ['styles']);
});
