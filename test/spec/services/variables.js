'use strict';

describe('Service: variables', function () {

  // load the service's module
  beforeEach(module('goeswebApp'));

  // instantiate service
  var variables;
  beforeEach(inject(function (_variables_) {
    variables = _variables_;
  }));

  it('should do something', function () {
    expect(!!variables).toBe(true);
  });

});
