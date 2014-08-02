'use strict';

module.exports = /*@ngInject*/
  function homeController($scope, shorthandCss) {

    $scope.output = function() {
      var cssString = $scope.getInputValue();
      $scope.displayOutput(shorthandCss(cssString));
    };

  };