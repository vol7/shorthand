'use strict';

module.exports =
  angular.module('shorthand.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
