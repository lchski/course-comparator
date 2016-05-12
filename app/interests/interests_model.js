'use strict';

angular.module('courseComparator.interestsModel', ['LocalStorageModule'])

    .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('uocc');
    }])

    .service('interestsModel', ['$rootScope', 'localStorageService', function($rootScope, localStorageService) {
        this.interests = localStorageService.get('interests') || [];

        $rootScope.$on('interestsModel::interestsUpdated', function(event, interests) {
            localStorageService.set('interests', interests);
        });

        this.addInterest = function(courseData, e) {
            e.preventDefault();

            courseData['isInterest'] = true;

            this.interests = _(this.interests).push(courseData);

            $rootScope.$broadcast('interestsModel::interestsUpdated', this.interests);
        };

        this.removeInterest = function(courseCode, e) {
            e.preventDefault();
            
            this.interests = _(this.interests).without(_(this.interests).findWhere({code: courseCode}));

            $rootScope.$broadcast('interestsModel::interestsUpdated', this.interests);
        };
    }]);