'use strict';

module.exports = /*@ngInject*/ function ($scope, shorthandCss) {

  $scope.output = function() {
    var cssString = $scope.getInputValue();
    var shorthandedCss = shorthandCss(cssString);

    $scope.displayOutput(shorthandedCss.string);
    shorthandedCss.longPropertiesPositions.forEach(function(position) {
      $scope.highlightInput(position.start.line - 1, position.start.column - 1, position.end.line - 1, position.end.column);
    });
  };

};