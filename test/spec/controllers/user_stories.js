'use strict';

describe('Controller: UserStoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('doDappApp'));

  var UserStoriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserStoriesCtrl = $controller('UserStoriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
