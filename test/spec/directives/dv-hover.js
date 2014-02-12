'use strict';

describe('Directive: dvHover', function () {

  // load the directive's module
  beforeEach(module('teamTmntApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dv-hover></dv-hover>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dvHover directive');
  }));
});
