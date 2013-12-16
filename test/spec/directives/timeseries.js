'use strict';

describe('Directive: timeseries', function () {
  beforeEach(module('goeswebApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<timeseries></timeseries>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the timeseries directive');
  }));
});
