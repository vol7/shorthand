'use strict';

module.exports = /*@ngInject*/
  function fooDirective(/* inject dependencies here, i.e. : $rootScope */) {
    return {
      link: function (scope, element) {
        // Do something awesome
      }
    };
  };
