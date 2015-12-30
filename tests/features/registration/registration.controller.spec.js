describe('RegistrationController test', function() {

    var RegistrationCtrl, $state, $httpBackend, ENV;
    var responseMock = {"username":"masteham","email":"masteham@localhost.com","password":"$2a$10$bQKqdYdVxCffJ5aSErdGMOG.W9Luo6vLXR.M9JTZhV016oXTgIoxi","role":"member","createdAt":"2015-12-12T09:10:12.054Z","updatedAt":"2015-12-12T09:10:12.054Z","id":20};

    beforeEach(module('app.core'));
    beforeEach(module('app.registration'));
    beforeEach(module('app.session'));
    
    beforeEach(inject(function($controller, $templateCache, _$state_, _$httpBackend_, _ENV_) {
        RegistrationCtrl = $controller('RegistrationController');
        $state = _$state_;
        $httpBackend = _$httpBackend_;
        ENV = _ENV_;

        RegistrationCtrl.username = "dilbadil";
        RegistrationCtrl.email = "dilbadil@localhost.com";
        RegistrationCtrl.password = "qweasd123";
        RegistrationCtrl.password_confirmation = "qweasd123";

        $templateCache.put('app/features/registration/views/index.html', '');
        $templateCache.put('app/features/session/views/login.html', '');
    }));

    it("should define properties and functions", function() {
        expect(RegistrationCtrl.username).toBeDefined();
        expect(RegistrationCtrl.email).toBeDefined();
        expect(RegistrationCtrl.password).toBeDefined();
        expect(RegistrationCtrl.password_confirmation).toBeDefined();
        expect(RegistrationCtrl.submit).toBeDefined();
        expect(RegistrationCtrl.message).toBeDefined();
    });

    it("Should response to register url", function() {
        expect($state.href('registration')).toEqual('#/registration');
    });

    it("Should has empty message", function() {
        expect(RegistrationCtrl.message).toEqual({});
    });

    it("Should has error messages", function() {
        RegistrationCtrl.username = "";

        RegistrationCtrl.submit();

        expect(RegistrationCtrl.message.username.length).toBe(1);
    });

    it ("Should success register after submit", function() {
        var isSubmited;

        $httpBackend.when('POST', ENV.API_URL + 'users').respond(responseMock);

        RegistrationCtrl.username = "dilbadil";
        isSubmited = RegistrationCtrl.submit();

        $httpBackend.flush();

        expect(isSubmited).toBe(true);
    });
});
