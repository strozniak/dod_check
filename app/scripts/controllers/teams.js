'use strict';

/**
 * @ngdoc function
 * @name doDappApp.controller:TeamsCtrl
 * @description
 * # TeamsCtrl
 * Controller of the doDappApp
 */
angular.module('doDappApp')
  .controller('TeamsCtrl', function ($scope) {
    $scope.teams = [
      'Team A',
      'Code Busters',
      'Red Builders'
    ];
  });
