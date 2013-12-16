'use strict';

describe('Service: goes', function () {

  // load the service's module
  beforeEach(module('goeswebApp'));

  // instantiate service
  var goes;
  beforeEach(inject(function (_goesService_) {
    goes = _goesService_;
  }));

  it('should do something', function () {
    expect(!!goes).toBe(true);
  });

});
