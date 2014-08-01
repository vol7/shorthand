'use strict';

module.exports = /*@ngInject*/
  function fooFilter(/* inject dependencies here, i.e. : $rootScope */) {
    return function (input) {
      // Do something awesome
    };
  };
