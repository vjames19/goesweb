'use strict';

angular.module('goeswebApp', ['ui.bootstrap', 'ui.map', 'highcharts-ng', 'ui.event']).config(['$routeProvider', function ($routeProvider) {
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
        controller: 'TimeseriesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
