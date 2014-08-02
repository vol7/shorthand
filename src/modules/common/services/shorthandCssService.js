'use strict';

module.exports = /*@ngInject*/
  function shorthandCssService() {
    var css = require('css');

    var shorthands = [{
      shorthandProperty: 'background',
      properties: ['background-color', 'background-image', 'background-repeat', 'background-position', 'background-attachment'],
      shorthandSyntax: 'background-color background-image background-repeat background-position background-attachment'
    }, {
      shorthandProperty: 'font',
      properties: ['font-style', 'font-variant', 'font-weight', 'font-size', 'line-height', 'font-family'],
      shorthandSyntax: 'font-style font-variant font-weight font-size/line-height font-family'
    }];

    return function(cssString) {
      var cssObject = css.parse(cssString);

      cssObject.stylesheet.rules.forEach(function(rule) {
        var declarations = [];

        rule.declarations.forEach(function(declaration) {
          declarations[declaration.property] = declaration;
        });

        shorthands.forEach(function(shorthand) {
          var longPropertiesUsed = false;
          var shorthandValue = shorthand.shorthandSyntax;

          shorthand.properties.forEach(function(longProperty) {
            if (declarations[longProperty]) {
              longPropertiesUsed = true;
              shorthandValue = shorthandValue.replace(longProperty, declarations[longProperty].value);
            }
            else {
              shorthandValue = shorthandValue.replace(longProperty, '');
            }
          });

          shorthandValue = shorthandValue.replace('  ', ' ').trim();

          if (longPropertiesUsed) {
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
