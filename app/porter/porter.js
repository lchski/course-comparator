'use strict';

angular.module('courseComparator.porter', ['ngRoute', 'courseComparator.interestsModel'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/porter', {
            templateUrl: 'porter/porter.html',
            controller: 'PorterCtrl'
        });
    }])

    .controller('PorterCtrl', ['$scope', 'interestsModel', function($scope, interestsModel) {
        $scope.interests = interestsModel.interests;

        $scope.setInterests = function() {
            interestsModel.setInterests($scope.interests);
        }
    }]);

angular.module('courseComparator').directive('jsonText', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attr, ngModel) {
            function into(input) {
                return JSON.parse(input);
            }
            function out(data) {
                return JSON.stringify(data, undefined, 2);
            }
            ngModel.$parsers.push(into);
            ngModel.$formatters.push(out);

        }
    };
});