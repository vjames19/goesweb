'use strict';

angular.module('goeswebApp')
  .controller('NavigationCtrl', function ($scope) {
    $scope.nav = {};

    $scope.nav.links = [
      {fragment: '#/', text:'Home'},
      {fragment: '#/slideshow', text:'Slideshow'},
      {fragment: '#/timeseries', text:'Timeseries'}
    ];

    $scope.nav.activeLinkIndex = 0;
  });
