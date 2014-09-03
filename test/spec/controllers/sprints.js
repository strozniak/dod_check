'use strict';

describe('Controller: SprintsCtrl', function () {

  // load the controller's module
  beforeEach(module('doDappApp'));

  var SprintsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SprintsCtrl = $controller('SprintsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
