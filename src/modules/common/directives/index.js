'use strict';

module.exports =
  angular.module('shorthand.common.directives', [])
  	.directive('aceEditor', require('./aceEditorDirective'));
