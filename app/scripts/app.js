'use strict';

angular.module('goeswebApp', ['ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/slideshow', {
        templateUrl: 'views/slideshow.html',
        controller: 'SlideshowCtrl'
      })
      .when('/timeseries', {
        templateUrl: 'views/timeseries.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
