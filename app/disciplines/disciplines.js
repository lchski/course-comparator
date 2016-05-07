'use strict';

angular.module('courseComparator.disciplines', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/disciplines', {
    templateUrl: 'disciplines/disciplines.html',
    controller: 'DisciplinesCtrl'
  });
}])

.controller('DisciplinesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('data/disciplines.json').success(function (data) {
    $scope.disciplines = data;
  });
}]);