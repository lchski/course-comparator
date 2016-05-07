'use strict';

angular.module('courseComparator.courses', ['ngRoute', 'LocalStorageModule'])

    .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('uocc');
    }])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/disciplines/:disciplineId', {
            templateUrl: 'courses/courses.html',
            controller: 'CoursesCtrl'
        });
    }])

    .controller('CoursesCtrl', ['$scope', '$routeParams', '$http', 'localStorageService', function ($scope, $routeParams, $http, localStorageService) {
        var interestsInStore = localStorageService.get('interests');

        $scope.interests = interestsInStore || [];

        $scope.$watch('interests', function () {
            localStorageService.set('interests', $scope.interests);
        }, true);

        $scope.disciplineId = $routeParams.disciplineId;

        $http.get('data/' + $scope.disciplineId + '.json').success(function (data) {
            $scope.courses = _(data).each(function(element, index) {
                var isInterest = false;

                if (_($scope.interests).findWhere(element)) {
                    isInterest = true;
                }

                _.extend(element, {isInterest: isInterest});
            });
        });

        $scope.orderProp = ['code'];

        $scope.toggleInterest = function(courseCode, e) {
            e.preventDefault();

            var course = _($scope.courses).findWhere({code: courseCode});

            $scope.interests.push(course);

            $scope.courses[_($scope.courses).indexOf(course)]['isInterest'] = true;
        };
    }]);