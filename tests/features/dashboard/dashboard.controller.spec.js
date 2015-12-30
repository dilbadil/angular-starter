describe('DashboardController test', function() {

    beforeEach(module('app.core'));
    beforeEach(module('app.dashboard'));

    it("Should response to dashboard url", function() {
        expect($state.href('dashboard')).toEqual('#/dashboard');
    });
});
