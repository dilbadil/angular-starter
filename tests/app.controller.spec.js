describe('App Controller', function() {

    var AppCtrl, authService;

    // Bootstrap modules
    beforeEach(module('app'));

    // Inject controller
    beforeEach(inject(function($controller, $rootScope) {
        AppCtrl = $controller('AppController', {
            $scope: $rootScope.$new()
        });
    }));

    // Tests
    it('should define properties', function() {
        expect(AppCtrl.value).toBeDefined();
    });
});
