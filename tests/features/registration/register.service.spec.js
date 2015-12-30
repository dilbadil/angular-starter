describe('Register service test', function() {
    var registerService, $httpBackend, ENV;

    beforeEach(module('app.core'));
    beforeEach(module('app.registration'));

    beforeEach(inject(function(_registerService_, _$httpBackend_, _ENV_) {
        registerService = _registerService_;
        $httpBackend = _$httpBackend_;
        ENV = _ENV_;
    }));

    it('should define properties and functions', function() {
        expect(registerService.register).toBeDefined();
    });

    it('should register new user to api', function() {
        var responseMock = {"username":"masteham","email":"masteham@localhost.com","password":"$2a$10$bQKqdYdVxCffJ5aSErdGMOG.W9Luo6vLXR.M9JTZhV016oXTgIoxi","role":"member","createdAt":"2015-12-12T09:10:12.054Z","updatedAt":"2015-12-12T09:10:12.054Z","id":20};
        var newUser = {
            username: "masteham",
            email: "masteham@localhost.com",
            password: "qweasd123",
            password_confirmation: "qweasd123"
        };

        $httpBackend.when('POST', ENV.API_URL + 'users').respond(responseMock);
        registerService.register(newUser)
            .then(function(result) {
                expect(result.error).toBeFalsy();
                expect(result.data).toEqual(responseMock);
            });
        $httpBackend.flush();
    });
});
