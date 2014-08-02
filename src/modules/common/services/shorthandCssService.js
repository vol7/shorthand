'use strict';

module.exports = /*@ngInject*/
  function shorthandCssService() {
    var css = require('css');

    var basicShorthandReplace = function(shorthand, declarations) {
      var shorthandValue = shorthand.shorthandSyntax;

      shorthand.properties.forEach(function(longProperty) {
        if (declarations[longProperty]) {
          shorthandValue = shorthandValue.replace(longProperty, declarations[longProperty].value);
        }
        else {
          shorthandValue = shorthandValue.replace(longProperty, '');
        }
      });

      shorthandValue = shorthandValue.replace('  ', ' ').trim();
      return shorthandValue;
    };

    var shorthands = [{
      shorthandProperty: 'background',
      properties: ['background-color', 'background-image', 'background-repeat', 'background-position', 'background-attachment'],
      shorthandSyntax: 'background-color background-image background-repeat background-position background-attachment',
      getShorthandValue: basicShorthandReplace
    }, {
      shorthandProperty: 'font',
      properties: ['font-style', 'font-variant', 'font-weight', 'font-size', 'line-height', 'font-family'],
      shorthandSyntax: 'font-style font-variant font-weight font-size/line-height font-family',
      getShorthandValue: function(shorthand, declarations) {
        var shorthandValue = basicShorthandReplace(shorthand, declarations);

        // We must at least have size & family or else the shorthand will get ignored by the browser
        if (!declarations['font-size'] || !declarations['font-family']) {
          return "";
        }

        // Remove slash if line-height is not specified
        if (!declarations['line-height']) {
          shorthandValue = shorthandValue.replace('/', '');
        }

        return shorthandValue.replace('  ', ' ').trim();
      }
    }, {
      shorthandProperty: 'border',
      properties: ['border-width', 'border-style', 'border-color'],
      shorthandSyntax: 'border-width border-style border-color',
      getShorthandValue: basicShorthandReplace
    }, {
      shorthandProperty: 'outline',
      properties: ['outline-width', 'outline-style', 'outline-color'],
      shorthandSyntax: 'outline-width outline-style outline-color',
      getShorthandValue: basicShorthandReplace
    }, {
      shorthandProperty: 'list-style',
      properties: ['list-style-type', 'list-style-position', 'list-style-image'],
      shorthandSyntax: 'list-style-type list-style-position list-style-image',
      getShorthandValue: basicShorthandReplace
    }];

    return function(cssString) {
      var cssObject = css.parse(cssString);

      cssObject.stylesheet.rules.forEach(function(rule) {
        var declarations = [];
        console.log(rule);

        rule.declarations.forEach(function(declaration) {
          declarations[declaration.property] = declaration;
        });

        shorthands.forEach(function(shorthand) {
          var shorthandValue = shorthand.getShorthandValue(shorthand, declarations);

          if (shorthandValue !== "") {
            var newDeclarations = [];

            // Add the new shorthand property
            newDeclarations.push({
              type: 'declaration',
              property: shorthand.shorthandProperty,
              value: shorthandValue
            });

            // Remove the long properties
            rule.declarations.forEach(function(declaration) {
              if (shorthand.properties.indexOf(declaration.property) <= -1) {
                newDeclarations.push(declaration);
              }
            });

            rule.declarations = newDeclarations;
          }
        });
      });

      return css.stringify(cssObject);
    };
  };
