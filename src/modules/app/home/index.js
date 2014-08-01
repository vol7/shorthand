'use strict';

module.exports =
  angular.module('shorthand.home', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/layout.html',
        controller: 'homeController'
      });
    })
  .controller('homeController', require('./homeController'));
