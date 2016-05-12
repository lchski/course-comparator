'use strict';

angular.module('courseComparator.interestsModel', ['LocalStorageModule'])

    .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('uocc');
    }])

    .service('interestsModel', ['localStorageService', function(localStorageService) {
        this.interests = localStorageService.get('interests') || [];

        // $scope.$watch('interests', function () {
        //     localStorageService.set('interests', $scope.interests);
        // }, true);

        this.addInterest = function(courseData) {

        };

        this.removeInterest = function(courseCode) {
            this.interests = _(this.interests).without(_(this.interests).findWhere({code: courseCode}));
        };
    }]);