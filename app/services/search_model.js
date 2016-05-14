'use strict';

angular.module('courseComparator.searchModel', [])

    .service('searchModel', [function() {
        this.$ = '';
        this.language = '';
        this.year = '';
    }]);