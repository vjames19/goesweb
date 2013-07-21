'use strict';

angular.module('goeswebApp').controller('SlideshowCtrl', ["$scope", "goesService", function ($scope, goesService) {

  var DEFAULT_INTERVAL = 1000;

  var MIN_INTERVAL = 1;
  var MAX_INTERVAL = 10;

  $scope.slides = goesService.getSlides();
  $scope.variables = goesService.getVariables();

  $scope.startDate;
  $scope.endDate;
  $scope.state = {
    interval: DEFAULT_INTERVAL
  };

  $scope.updateInterval = function () {
    if (MIN_INTERVAL <= $scope.newInterval && $scope.newInterval <= MAX_INTERVAL) {
      $scope.state.interval = $scope.newInterval * 1000;
    } else {
      $scope.state.interval = DEFAULT_INTERVAL;
    }
  };

  $scope.generateSlideshow = function() {
    $scope.slides = goesService.getSlides($scope.selectedVariable, $scope.startDate, $scope.endDate);
  };

}])
;
