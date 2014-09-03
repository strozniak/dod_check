'use strict';

describe('Directive: theDirective', function () {

  // load the directive's module
  beforeEach(module('doDappApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<the-directive></the-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the theDirective directive');
  }));
});
