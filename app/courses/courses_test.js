'use strict';

describe('courseComparator.courses module', function() {

    beforeEach(module('courseComparator.courses'));

    describe('courses controller', function(){
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend
                .expectGET('data/TES.json')
                .respond([
                    {
                        "code": "TES1101",
                        "description": "A test course.",
                        "language": "English",
                        "restriction": "",
                        "title": "Test Course",
                        "year": "1"
                    }
                ]);

            scope = $rootScope.$new();
            ctrl = $controller('CoursesCtrl', {
                $scope: scope,
                $routeParams: {
                    disciplineId: 'TES'
                }
            });
        }));

        it('should ....', inject(function() {
            expect(ctrl).toBeDefined();
        }));

        it('should set the discipline id', inject(function() {
            expect(scope.disciplineId).toEqual('TES');
        }));

        it('should have data', inject(function() {
            expect(scope.courses).toBeUndefined();

            $httpBackend.flush();

            expect(scope.courses).toEqual([
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

        it('should sort by course code', inject(function() {
            expect(scope.orderProp).toEqual(['code']);
        }));

    });
});