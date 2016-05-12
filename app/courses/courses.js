'use strict';

angular.module('courseComparator.courses', ['ngRoute', 'courseComparator.interestsModel'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/disciplines/:disciplineId', {
            templateUrl: 'courses/courses.html',
            controller: 'CoursesCtrl'
        });
    }])

    .controller('CoursesCtrl', ['$scope', '$routeParams', '$http', 'interestsModel', function ($scope, $routeParams, $http, interestsModel) {
        $scope.interestsModel = interestsModel;

        $scope.interests = interestsModel.interests;

        $scope.$on('interestsModel::interestsUpdated', function(event, interests) {
            $scope.interests = interestsModel.interests;
        });

        $scope.disciplineId = $routeParams.disciplineId;

        $http.get('data/' + $scope.disciplineId + '.json').success(function (data) {
            $scope.courses = _(data).each(function(element, index) {
                _.extend(element, _($scope.interests).findWhere(element));
            });

            $scope.courses = data;
        });

        $scope.orderProp = ['code'];
    }]);