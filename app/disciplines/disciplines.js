'use strict';

angular.module('courseComparator.disciplines', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/disciplines', {
    templateUrl: 'disciplines/disciplines.html',
    controller: 'DisciplinesCtrl'
  });
}])

.controller('DisciplinesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('data/data.json').success(function (data) {
    $scope.disciplinesAndCourses = data;
  });

  $scope.orderProp = ['code'];
}]);