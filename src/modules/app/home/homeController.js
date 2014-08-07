'use strict';

module.exports = /*@ngInject*/ function ($scope, shorthandCss) {

  $scope.output = function() {
    var cssString = $scope.inputEditor.getValue();
    var shorthandedCss = shorthandCss(cssString);

    $scope.outputEditor.setValue(shorthandedCss.string);
    $scope.outputEditor.clearSelection();

    shorthandedCss.longPropertiesPositions.forEach(function(position) {
      $scope.highlightInput(position.start.line - 1, position.start.column - 1, position.end.line - 1, position.end.column);
    });
  };

  $scope.clearInput = function() {
    $scope.inputEditor.setValue('');
    $scope.outputEditor.setValue('');
  };

};