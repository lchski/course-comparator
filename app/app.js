'use strict';

// Declare app level module which depends on views, and components
angular.module('courseComparator', [
  'ngRoute',
  'courseComparator.disciplines',
  'courseComparator.courses'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .otherwise({
        redirectTo: '/disciplines'
      });
}]);
