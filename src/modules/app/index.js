'use strict';

module.exports =
  angular.module('shorthand', [
    'ngRoute',
    'ngAnimate',
    require('../../../tmp/templates').name,
    require('../common').name,
    require('./home').name,
    require('./about').name,
    require('./navbar').name
  ]).config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });
