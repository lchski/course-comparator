'use strict';

describe('courseComparator.disciplines module', function() {

  beforeEach(module('courseComparator.disciplines'));

  describe('disciplines controller', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET('data/data.json')
        .respond({
          "HIS": [
            {
              "code": "HIS1101",
              "description": "Survey of the political, social and cultural evolution of Canada, from its origins to the present.",
              "language": "English",
              "restriction": "",
              "title": "The Making of Canada",
              "year": "1"
            }
          ]
        });

      scope = $rootScope.$new();
      ctrl = $controller('DisciplinesCtrl', {$scope: scope});
    }));

    it('should ....', inject(function() {
      expect(ctrl).toBeDefined();
    }));

    it('should have data', inject(function() {
      expect(scope.disciplinesAndCourses).toBeUndefined();

      $httpBackend.flush();

      expect(scope.disciplinesAndCourses).toEqual({
        "HIS": [
          {
            "code": "HIS1101",
            "description": "Survey of the political, social and cultural evolution of Canada, from its origins to the present.",
            "language": "English",
            "restriction": "",
            "title": "The Making of Canada",
            "year": "1"
          }
        ]
      });
    }));

    it('should sort by course code', inject(function() {
      expect(scope.orderProp).toEqual(['code']);
    }));

  });
});