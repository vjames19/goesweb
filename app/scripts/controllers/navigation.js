'use strict';

angular.module('goeswebApp')
  .controller('NavigationCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.nav = {};
    $scope.nav.links = [
      {fragment: '#/', text: 'Home'},
      {fragment: '#/slideshow', text: 'Slideshow'},
      {fragment: '#/timeseries', text: 'Timeseries'}
    ];

    /**
     * True if the given fragment is active.
     * @param {string} fragment
     * @returns {boolean}
     */
    $scope.isActive = function(fragment) {
      return $location.path() == fragment.substring(1);
    }
}]);
