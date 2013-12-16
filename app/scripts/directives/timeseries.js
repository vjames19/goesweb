//'use strict';

angular.module('goeswebApp')
    .directive('timeseries', function(goesService) {
      return {
        templateUrl: 'scripts/directives/timeseries.html',
        restrict: 'E',
        replace: true,
        controller: function($scope, goesService) {
          var plot = {
            type: 'line',
            name: $scope.selectedVariable,
            pointInterval: 24 * 3600 * 1000,
            pointStart: Date.UTC(2013, 0, 1),
            data: goesService.getTimeseries().data
          }
          $scope.variables = goesService.getVariables();
          $scope.selectedVariable = $scope.variables[0];

          $scope.mapOptions = {
            center: new google.maps.LatLng(18.22079, -66.59011),
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.SATELLITE
          };

          $scope.toggleLoading = function() {
            this.chartConfig.loading = !this.chartConfig.loading
          };

          $scope.chartConfig = {
            chart: {
              zoomType: 'x',
              spacingRight: 20
            },
            title: {
              text: $scope.selectedVariable
            },
            subtitle: {
              text: document.ontouchstart === undefined ?
                  'Click and drag in the plot area to zoom in' :
                  'Pinch the chart to zoom in'
            },
            xAxis: {
              type: 'datetime',
              maxZoom: 14 * 24 * 3600000, // fourteen days
              title: {
                text: null
              }
            },
            yAxis: {
              title: {
                text: ''
              }
            },
            tooltip: {
              shared: true
            },
            legend: {
              enabled: false
            },
            plotOptions: {
              area: {
                fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                  stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  ]
                },
                lineWidth: 1,
                marker: {
                  enabled: false
                },
                shadow: false,
                states: {
                  hover: {
                    lineWidth: 1
                  }
                },
                threshold: null
              }
            },

            series: [ plot ],
            loading: false
          };

          $scope.generateTimeseries = function() {
            console.log('calling')
            $scope.chartConfig.title.text = $scope.selectedVariable;
            $scope.chartConfig.series.pop();
            plot.data  = goesService.getTimeseries().data;
            $scope.chartConfig.series.push(plot);
          };
        },
        link: function(scope, element) {
          var height = $(window).innerHeight() - $(".navbar").innerHeight() - 20;
          var el = $(element);
          el.find('.map').innerHeight(height);
        }
      };
    });
