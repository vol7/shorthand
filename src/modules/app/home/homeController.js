'use strict';

module.exports = /*@ngInject*/
  function homeController($scope) {
    var ace = require('brace');
    require('brace/mode/css');
		require('brace/theme/tomorrow');

		var inputEditor = ace.edit('inputEditor');
		var outputEditor = ace.edit('outputEditor');
		var editors = [inputEditor, outputEditor];

		editors.forEach(function(editor) {
			editor.getSession().setMode('ace/mode/css');
			editor.setTheme('ace/theme/tomorrow');
			editor.setShowPrintMargin(false);
			editor.setHighlightActiveLine(false);
			editor.setHighlightGutterLine(false);
			editor.setHighlightSelectedWord(false);
			editor.setShowFoldWidgets(false);
			editor.setFontSize(16);
			editor.getSession().setTabSize(2);
			editor.setValue("body {\n\tcolor: white;\n\tfont-size: 14px;\n}");
		});

		outputEditor.setReadOnly(true);
  };
