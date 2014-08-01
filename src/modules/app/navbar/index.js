'use strict';

module.exports =
  angular.module('shorthand.navbar', []).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/navbar/layout.html',
        controller: 'navbarController'
      });
    })
  .controller('navbarController', require('./navbarController'));
