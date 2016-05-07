'use strict';

angular.module('courseComparator.disciplines', ['ngRoute'])

    .controller('DisciplinesCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('data/disciplines.json').success(function (data) {
            $scope.disciplines = data;
        });
    }]);