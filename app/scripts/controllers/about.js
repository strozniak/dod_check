'use strict';

/**
 * @ngdoc function
 * @name doDappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the doDappApp
 */
angular.module('doDappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma', 'Another thing'
    ];
  });
