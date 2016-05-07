'use strict';

describe('courseComparator.interests module', function() {

    beforeEach(module('courseComparator.interests'));

    describe('interests controller', function(){
        var scope, ctrl;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('InterestsCtrl', {$scope: scope});
        }));

        it('should ....', inject(function() {
            expect(ctrl).toBeDefined();
        }));

    });
});