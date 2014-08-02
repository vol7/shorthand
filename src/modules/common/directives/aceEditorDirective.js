'use strict';

module.exports = /*@ngInject*/
  function aceEditorDirective() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var ace = require('brace');
        require('brace/mode/css');
        require('brace/theme/tomorrow');

        var editor = ace.edit(element[0]); // We use [0] since 'element' is a jQLite object and we want a vanilla one

        editor.getSession().setMode('ace/mode/css');
        editor.setTheme('ace/theme/tomorrow');
        editor.setShowPrintMargin(false);
        editor.setHighlightActiveLine(false);
        editor.setHighlightGutterLine(false);
        editor.setHighlightSelectedWord(false);
        editor.setShowFoldWidgets(false);
        editor.setFontSize(12);
        editor.getSession().setTabSize(2);
        editor.setValue("body {\n\tcolor: white;\n\tfont-size: 14px;\n}");

        if (attrs.readonly) {
          editor.setReadOnly(true);
        }
      }
    };
  };
