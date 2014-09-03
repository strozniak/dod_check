'use strict';

/**
 * @ngdoc function
 * @name doDappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doDappApp
 */
angular.module('doDappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
