'use strict';

angular.module('goeswebApp').factory('goesService', function slides() {
  var data = {};
  data.getSlides = function(variable, startDate, endDate) {
    return [
      {image: "http://academic.uprm.edu/hdc/GOES-PRWEB_RESULTS/actual_ET/actual_ET20090101.jpg", active: true},
      {image: "http://academic.uprm.edu/hdc/GOES-PRWEB_RESULTS/actual_ET/actual_ET20090102.jpg", active: false},
      {image: "http://academic.uprm.edu/hdc/GOES-PRWEB_RESULTS/actual_ET/actual_ET20090103.jpg", active: false},
      {image: "http://academic.uprm.edu/hdc/GOES-PRWEB_RESULTS/actual_ET/actual_ET20090104.jpg", active: false},
      {image: "http://academic.uprm.edu/hdc/GOES-PRWEB_RESULTS/actual_ET/actual_ET20090105.jpg", active: false}
    ];
  };



  data.getVariables = function() {
    return ['recharge', 'et_service'];
  };

  return data;
});
