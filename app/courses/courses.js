'use strict';

angular.module('courseComparator.courses', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/disciplines/:disciplineId', {
            templateUrl: 'courses/courses.html',
            controller: 'CoursesCtrl'
        });
    }])

    .controller('CoursesCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
        $scope.disciplineId = $routeParams.disciplineId;

        $http.get('data/data.json').success(function (data) {
            $scope.disciplinesAndCourses = data;
        });

        $scope.orderProp = ['code'];
    }]);