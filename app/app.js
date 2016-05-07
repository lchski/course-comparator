'use strict';

// Declare app level module which depends on views, and components
angular.module('courseComparator', [
        'ngRoute',
        'localStorageServiceProvider',
        'courseComparator.disciplines',
        'courseComparator.courses',
        'courseComparator.interests'
    ])
    .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('uocc');
    }])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/'
            });
    }]);
