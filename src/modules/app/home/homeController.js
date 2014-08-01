'use strict';

module.exports = /*@ngInject*/
  function homeController($scope) {
    var ace = require('brace');
    require('brace/mode/css');
		require('brace/theme/monokai');

		var editor = ace.edit('editor');
		editor.getSession().setMode('ace/mode/css');
		editor.setTheme('ace/theme/monokai');
		editor.setShowPrintMargin(false);
  };
