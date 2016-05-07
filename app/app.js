'use strict';

// Declare app level module which depends on views, and components
angular.module('courseComparator', [
        'ngRoute',
        'courseComparator.disciplines',
        'courseComparator.courses',
        'courseComparator.interests'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/'
            });
    }]);
