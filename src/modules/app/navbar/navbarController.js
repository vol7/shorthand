'use strict';

module.exports = /*@ngInject*/ function ($scope, $location) {
    $scope.toggleAbout = function() {
      if ($location.path() === '/') {
        $location.path('/about');
      }
      else {
        $location.path('/');
      }
    };
  };
