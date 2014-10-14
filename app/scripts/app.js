'use strict';

/**
 * @ngdoc overview
 * @name doDappApp
 * @description
 * # doDappApp
 *
 * Main module of the application.
 */
var app =angular
  .module('doDappApp', [
    'ngRoute'
  ]);


  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
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

  app.directive('header', function() { 
    return {
      restrict: 'E',
      templateUrl:'views/header.html',
      controller: 'TeamsCtrl'
    }; 
  });

  app.directive('footer', function() { 
    return {
      restrict: 'E',
      templateUrl:'views/footer.html'
    }; 
  });

    app.directive('content', function() { 
    return {
      restrict: 'E',
      templateUrl:'views/content.html'
    }; 
  });