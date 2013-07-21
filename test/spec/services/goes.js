'use strict';

describe('Service: goes', function () {

  // load the service's module
  beforeEach(module('goeswebApp'));

  // instantiate service
  var goes;
  beforeEach(inject(function (_goes_) {
    goes = _goes_;
  }));

  it('should do something', function () {
    expect(!!goes).toBe(true);
  });

});
