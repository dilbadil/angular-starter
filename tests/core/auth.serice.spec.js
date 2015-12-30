describe('Auth Service', function() {

    var ENV;
    var authService;
    var $httpBackend;
    var USER_ROLES;
    var credentials = {
        username: 'abdillah308@gmail.com',
        password: 'qweasd123',
    };
    var responseLoginMock = {
        "username": "membertest",
        "password": "$2a$10$jbAEP/9jkZtF7.tqI2sfIu8h/5mzKvlPUZHi6sSMmUlUSY8Kdjx2m",
        "firstName": "The",
        "lastName": "Member",
        "email": "member@gmail.com",
        "role": "member",
        "id": 1,
        "createdAt": "2015-05-14T00:05:16.000Z",
        "updatedAt": "2015-05-14T00:05:16.000Z",
        "token": "12345qweasdzxc"
    };

    // Bootstrap modules
    beforeEach(module('app.core'));
    beforeEach(module('app.dashboard'));

    // Set service
    beforeEach(inject(function(_authService_, _$httpBackend_, _ENV_, _USER_ROLES_) {
        authService = _authService_;
        $httpBackend = _$httpBackend_;
        ENV = _ENV_;
        USER_ROLES = _USER_ROLES_;
    }));

    it('should provide functions', function() {
        expect(authService.login).toBeDefined();
        expect(authService.isAuthenticated).toBeDefined();
        expect(authService.isAuthorized).toBeDefined();
        expect(authService.getUserInfo).toBeDefined();
        expect(authService.logout).toBeDefined();
        expect(authService.refreshAuthToken).toBeDefined();
        expect(authService.isAuthorizedState).toBeDefined();
    });

    // Tests service
    describe('After login', function() {
        it('service login should return username', function() {
            $httpBackend.when('POST', ENV.API_URL + 'login').respond(responseLoginMock);

            authService.login(credentials)
                .then(function(data) {
                    expect(data.user.username).toEqual('membertest');
                });

            $httpBackend.flush();
        });

        it('should authenticated', function() {
            expect(authService.isAuthenticated()).toEqual(true);
        });

        it('should authorized', function() {
            expect(authService.isAuthorized(USER_ROLES.member)).toEqual(true);
        });

        it('should return user information', function() {
            expect(authService.getUserInfo()).toEqual(responseLoginMock);
        });

        it('should authorized to dashboard page', function() {
            expect(authService.isAuthorizedState('dashboard')).toEqual(true);
        });
    });

    describe('After logout', function() {
        it('should not authenticated', function() {
            authService.logout();
            expect(authService.isAuthenticated()).toEqual(false);
        });
    });
});
