'use strict';

module.exports =
  angular.module('shorthand', [
    'ngRoute',
    require('../../../tmp/templates').name,
    require('../common').name,
    require('./home').name
  ]);
