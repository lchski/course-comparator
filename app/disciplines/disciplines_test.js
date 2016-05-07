'use strict';

describe('courseComparator.disciplines module', function() {

  beforeEach(module('courseComparator.disciplines'));

  describe('disciplines controller', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET('data/disciplines.json')
        .respond(["TES", "FOO"]);

      scope = $rootScope.$new();
      ctrl = $controller('DisciplinesCtrl', {$scope: scope});
    }));

    it('should ....', inject(function() {
      expect(ctrl).toBeDefined();
    }));

    it('should have data', inject(function() {
      expect(scope.disciplines).toBeUndefined();

      $httpBackend.flush();

      expect(scope.disciplines).toEqual(["TES", "FOO"]);
    }));

  });
});