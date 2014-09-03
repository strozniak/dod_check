'use strict';

/**
 * @ngdoc overview
 * @name doDappApp
 * @description
 * # doDappApp
 *
 * Main module of the application.
 */
angular
  .module('doDappApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/teams', {
        templateUrl: 'views/teams.html',
        controller: 'TeamsCtrl'
      })
      .when('/sprints', {
        templateUrl: 'views/sprints.html',
        controller: 'SprintsCtrl'
      })
      .when('/user_stories', {
        templateUrl: 'views/user_stories.html',
        controller: 'UserStoriesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
