'use strict';

angular.module('cmApp')
  .controller('MainCtrl', function ($scope) {

    $scope.colors = [
      {r: 255, g: 255, b: 255, hist: []},
      {r: 255, g: 255, b: 255, hist: []}
    ];

    $scope.saveColor = function (color) {
      return color.hist.push(_.omit(color, 'hist'));
    }

    $scope.restoreColor = function (color, version) {
      return _.extend(color, version);
    }

  });
