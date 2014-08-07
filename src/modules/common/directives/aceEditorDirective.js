'use strict';

module.exports = /*@ngInject*/
  function aceEditorDirective($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var ace = require('brace');
        require('brace/mode/css');
        require('brace/theme/tomorrow');
        var Range = ace.acequire('ace/range').Range;

        var editor = ace.edit(element[0]); // We use [0] since 'element' is a jQLite object and we want a vanilla one

        editor.getSession().setMode('ace/mode/css');
        editor.setTheme('ace/theme/tomorrow');
        editor.setShowPrintMargin(false);
        editor.setHighlightActiveLine(false);
        editor.setHighlightGutterLine(false);
        editor.setShowFoldWidgets(false);
        editor.setFontSize(12);
        editor.getSession().setTabSize(2);
        editor.getSession().setUseWorker(false);

        if (attrs.readonly) {
          scope.outputEditor = editor;

          editor.setValue("body {\n\tfont: italic 300 1em/1.2em Helvetica;\n}");

          editor.setReadOnly(true);
          editor.renderer.$cursorLayer.element.style.opacity = 0;

          scope.removeOutputPlaceholder = function() {
            element.removeClass('placeholder');
            editor.setValue('');
          };
        }
        else {
          scope.inputEditor = editor;

          editor.setValue("body {\n\tfont-size: 1em;\n\tline-height: 1.2em;\n\tfont-family: Helvetica;\n\tfont-weight: 300;\n\tfont-style: italic;\n}");

          scope.highlightInput = function(startRow, startColumn, endRow, endColumn) {
            editor.session.addMarker(new Range(startRow, startColumn, endRow, endColumn), "ace_active-line", "text");
          };

          // Generate output on paste
          editor.on('paste', function(text) {
            $timeout(function() { // Workaround because if we dont wait, we dont get the new pasted content
              scope.output();
            }, 1);
          });

          // Generate output on change
          var editorChangePromise;
          editor.on('change', function(text) {
            $timeout.cancel(editorChangePromise);
            editorChangePromise = $timeout(function() {
              scope.output();
            }, 300);
          });

          editor.on('focus', function() {
            scope.removeInputPlaceholder();
            scope.removeOutputPlaceholder();

            editor.removeAllListeners('focus');
          });

          scope.removeInputPlaceholder = function() {
            element.removeClass('placeholder');
            editor.setValue('');
          };
        }

        editor.clearSelection(); // Needed because initial setValue highlights all text
      }
    };
  };
