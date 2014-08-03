'use strict';

module.exports =
  angular.module('shorthand.about', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'app/about/layout.html',
        controller: 'aboutController'
      });
    })
  .controller('aboutController', require('./aboutController'));