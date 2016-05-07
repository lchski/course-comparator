'use strict';

angular.module('courseComparator.interests', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/interests', {
            templateUrl: 'interests/interests.html',
            controller: 'InterestsCtrl'
        });
    }])

    .controller('InterestsCtrl', ['$scope', function($scope) {
        $scope.toggleInterest = function() {

        };
    }]);