'use strict';

/**
 * @ngdoc function
 * @name doDappApp.controller:UserStoriesCtrl
 * @description
 * # UserStoriesCtrl
 * Controller of the doDappApp
 */
angular.module('doDappApp')
  .controller('UserStoriesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
