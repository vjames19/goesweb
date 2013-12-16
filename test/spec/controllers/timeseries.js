'use strict';

describe('Controller: TimeseriesCtrl', function () {

  // load the controller's module
  beforeEach(module('goeswebApp'));

  var TimeseriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimeseriesCtrl = $controller('TimeseriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
