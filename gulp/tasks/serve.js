'use strict';

var gulp = require('gulp'),
  connect = require('connect'),
  staticServer = connect();

// TODO: Try browser-sync instead of connect + gulp-livereload

module.exports = gulp.task('serve', function (next) {
  var staticServerPath = BUILD_FOLDER;
  if (release)
    staticServerPath = RELEASE_FOLDER;
  staticServer.use(connect.static(staticServerPath)).listen(process.env.PORT || config.ports.staticServer, next);
});
