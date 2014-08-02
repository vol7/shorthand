'use strict';

module.exports =
  angular.module('shorthand.common.services', [])
    .factory('shorthandCss', require('./shorthandCssService'));
