'use strict';

angular.module('courseComparator.interests', ['ngRoute', 'LocalStorageModule'])

    .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('uocc');
    }])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/interests', {
            templateUrl: 'interests/interests.html',
            controller: 'InterestsCtrl'
        });
    }])

    .controller('InterestsCtrl', ['$scope', 'localStorageService', function($scope, localStorageService) {
        var interestsInStore = localStorageService.get('interests');

        $scope.interests = interestsInStore || [];

        $scope.$watch('interests', function () {
            localStorageService.set('interests', $scope.interests);
        }, true);

        $scope.removeInterest = function(courseCode, e) {
            e.preventDefault();

            $scope.interests = _($scope.interests).without(_($scope.interests).findWhere({code: courseCode}));
        };
    }]);