'use strict';

/**
 * @ngdoc directive
 * @name doDappApp.directive:theDirective
 * @description
 * # theDirective
 */
angular.module('doDappApp')
  .directive('theDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the theDirective directive');
      }
    };
  });
