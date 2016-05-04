'use strict';

describe('courseComparator.view1 module', function() {

  beforeEach(module('courseComparator.view1'));

  describe('view1 controller', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET('data/data.json')
        .respond(['HIS': ]);

      scope = $rootScope.$new();
      ctrl = $controller('View1Ctrl', {$scope: scope});
    }));

    it('should ....', inject(function() {
      expect(ctrl).toBeDefined();
    }));

    it('should have data', inject(function() {
      expect(scope).toBeDefined();
    }));

  });
});