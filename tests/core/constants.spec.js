describe('Constants tests', function() {

    var PATHS, AUTH_EVENTS, USER_ROLES, ENV;

    beforeEach(module('app.core'));

    beforeEach(inject(function($injector) {
        PATHS = $injector.get('PATHS');
        ENV = $injector.get('ENV');
        USER_ROLES = $injector.get('USER_ROLES');
    }));

    it('should define paths', function() {
        expect(PATHS).toBeDefined();
        expect(PATHS.app).toBeDefined();
        expect(PATHS.app).toEqual('app/');
        expect(PATHS.assets).toBeDefined();
        expect(PATHS.assets).toEqual('assets/');
        expect(PATHS.layout).toBeDefined();
        expect(PATHS.layout).toEqual('app/layouts/');
        expect(PATHS.features).toBeDefined();
        expect(PATHS.features).toEqual('app/features/');
    });

    it('should define user roles', function() {
        expect(USER_ROLES).toBeDefined();
        expect(USER_ROLES.all).toBeDefined();
        expect(USER_ROLES.all).toEqual('*');
        expect(USER_ROLES.admin).toBeDefined();
        expect(USER_ROLES.admin).toEqual('admin');
        expect(USER_ROLES.member).toBeDefined();
        expect(USER_ROLES.member).toEqual('member');
        expect(USER_ROLES.guest).toBeDefined();
        expect(USER_ROLES.guest).toEqual('guest');
    });

    it('Should define environments', function() {
        expect(ENV).toBeDefined();
        expect(ENV.API_URL).toBeDefined();
        expect(ENV.API_VERSION).toBeDefined();
    });
});
