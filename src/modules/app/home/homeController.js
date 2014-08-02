'use strict';

module.exports = /*@ngInject*/
  function homeController($scope) {
    var ace = require('brace');
    require('brace/mode/css');
		require('brace/theme/tomorrow');

		var inputEditor = ace.edit('inputEditor');
		inputEditor.getSession().setMode('ace/mode/css');
		inputEditor.setTheme('ace/theme/tomorrow');
		inputEditor.setShowPrintMargin(false);
		inputEditor.setHighlightActiveLine(false);
		inputEditor.setHighlightGutterLine(false);
		inputEditor.setHighlightSelectedWord(false);
		inputEditor.setShowFoldWidgets(false);
		inputEditor.setValue("body {\n\tcolor: white;\n\tfont-size: 14px;\n}");

		var outputEditor = ace.edit('outputEditor');
		outputEditor.getSession().setMode('ace/mode/css');
		outputEditor.setTheme('ace/theme/chrome');
		outputEditor.setShowPrintMargin(false);
		outputEditor.setHighlightActiveLine(false);
		outputEditor.setHighlightGutterLine(false);
		outputEditor.setHighlightSelectedWord(false);
  };
