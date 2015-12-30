describe('Login controller', function() {

    var $http, $httpBackend, LoginCtrl, $state, $rootScope;
    var credentials = {
        username: 'abdillah308@gmail.com',
        password: 'qweasd123',
    };
    var responseLoginMock = {
        "username": "abdillah308",
        "password": "$2a$10$jbAEP/9jkZtF7.tqI2sfIu8h/5mzKvlPUZHi6sSMmUlUSY8Kdjx2m",
        "firstName": "Abdillah",
        "lastName": "Abdi",
        "email": "abdillah308@gmail.com",
        "role": "admin",
        "id": 1,
        "createdAt": "2015-05-14T00:05:16.000Z",
        "updatedAt": "2015-05-14T00:05:16.000Z",
        "token": "123qweasdzxc"
    };

    // Bootstrap modules
    beforeEach(module('app.core'));
    beforeEach(module('app.dashboard'));
    beforeEach(module('app.session'));

    // Set service
    beforeEach(inject(function($templateCache, $controller, _$httpBackend_, _$http_, _$rootScope_, _$state_) {
        var loginScope = _$rootScope_.$new({
            refreshCurrentUser: function(){}
        });

        $httpBackend = _$httpBackend_;
        $http = _$http_;
        $state = _$state_;
        $rootScope = _$rootScope_;
        LoginCtrl = $controller('LoginController', {
            $rootScope: loginScope,
            $scope: loginScope,
        });

        $templateCache.put('app/features/dashboard/views/index.html', '');
    }));

    it('should define functions and properties', function() {
        expect(LoginCtrl.credentials).toBeDefined();
        expect(LoginCtrl.credentials.email).toEqual('');
        expect(LoginCtrl.credentials.password).toEqual('');
        expect(LoginCtrl.login).toBeDefined();
    });

    describe('Login process', function() {

        it('should respond to login page', function() {
            expect($state.href('session.login')).toEqual('#/session/login');
        });

        it('exists credentials object on controller', function() {
            expect(typeof LoginCtrl.credentials).toBe('object');
        });
    });
});
