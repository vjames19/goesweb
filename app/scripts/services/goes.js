'use strict';

angular.module('goeswebApp').factory('goesService', function slides() {
  // TODO: Implement real service.
  var data = {};
  data.getSlides = function (variable, startDate, endDate) {
    return [
      {image: "http://academic.uprm.edu/hdc/GOES-PRWEB_RESULTS/actual_ET/actual_ET20090101.jpg", active: true},
      {image: "http://academic.uprm.edu/hdc/GOES-PRWEB_RESULTS/actual_ET/actual_ET20090102.jpg", active: false},
      {image: "http://academic.uprm.edu/hdc/GOES-PRWEB_RESULTS/actual_ET/actual_ET20090103.jpg", active: false},
      {image: "http://academic.uprm.edu/hdc/GOES-PRWEB_RESULTS/actual_ET/actual_ET20090104.jpg", active: false},
      {image: "http://academic.uprm.edu/hdc/GOES-PRWEB_RESULTS/actual_ET/actual_ET20090105.jpg", active: false}
    ];
  };


  data.getVariables = function () {
    return [
      'actual_ET','rainfall', 'runoff', 'aquifer_recharge', 'soil_moisture',  'reference_ET',
      'crop_coefficient', 'crop_stress_coefficient', 'wind_speed', 'solar_radiation', 'net_radiation',
      'average_air_temperature', 'minimum_air_temperature', 'maximum_air_temperature',
      'effective_surface_temperature', 'saturated_vapor_pressure', 'actual_vapor_pressure',
      'relative_humidity', 'surface_resistance', 'aerodynamic_resistance', 'latent_heat_flux',
      'sensible_heat_flux', 'non_transient_variables', 'soil_saturation', 'bowen_ratio'
    ].sort();
  };

  data.getTimeseries = function(variable, startDate, endDate) {
    var dataPoints = [];
    for(var i=0; i < 365; i++) {
      dataPoints.push(Math.random() * 100);
    }
    return {name: variable, data: dataPoints};
  }

  return data;
});
