'use strict';

angular.module('courseComparator.interests', ['ngRoute', 'courseComparator.interestsModel', 'courseComparator.searchModel'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/interests', {
            templateUrl: 'interests/interests.html',
            controller: 'InterestsCtrl'
        });
    }])

    .controller('InterestsCtrl', ['$scope', 'interestsModel', 'searchModel', function($scope, interestsModel, searchModel) {
        $scope.interestsModel = interestsModel;

        $scope.interests = interestsModel.interests;

        $scope.$on('interestsModel::interestsUpdated', function(event, interests) {
            $scope.interests = interestsModel.interests;
        });

        $scope.searchModel = searchModel;
    }]);