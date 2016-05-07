'use strict';

describe('courseComparator.interests module', function() {

    beforeEach(module('courseComparator.interests'));

    describe('interests controller', function(){
        var scope, ctrl;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();

            scope.interests = [
                {
                    "code": "TES1101",
                    "description": "A test course.",
                    "language": "English",
                    "restriction": "",
                    "title": "Test Course",
                    "year": "1"
                }
            ];

            ctrl = $controller('InterestsCtrl', {$scope: scope});
        }));

        it('should ....', inject(function() {
            expect(ctrl).toBeDefined();
        }));

        it('should have a test interest', inject(function() {
            expect(scope.interests).toEqual([
                {
                    "code": "TES1101",
                    "description": "A test course.",
                    "language": "English",
                    "restriction": "",
                    "title": "Test Course",
                    "year": "1"
                }
            ]);
        }));

        it('should have a toggle interest function', inject(function() {
            expect(scope.toggleInterest).toBeDefined();
        }));

    });
});